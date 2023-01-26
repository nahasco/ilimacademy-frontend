import React, { useState } from 'react'
import Notes_icon from '../../icons/notes_icon'
import useData from '../../stores/useData'
import Skill_level from '../Skill_level'
import Link from "next/link"
import practiceExercise from "../../utils/practiceExercise"
import useStore from '../../stores/userStore'
import FullPageLoader from '../FullPageLoader'
import Popup from './Popup'
import { API_URL } from '../../config'
import { Button } from '../Button'
import Router from 'next/router'
import { BeatLoader, PulseLoader } from 'react-spinners'

export default function Sections({subject}) {
    const data = useData((state) => state.data)

    let sections
    for (let i = 0; i < 4; i++) {
        if (data.subjects[i].title == subject) {
            sections = data.subjects[i].sections
            break
        } 
    }   

    return (
        <div className="practice-all">
            <div className="practice-all-header">
                <div className="title">All {subject} Practice</div>
                <div className="description">You can choose whatever topic you want and start practicing</div>
            </div>
            <div className='sections'>
                {sections && 
                <>
                    {sections.map(section => {
                        return <Section key={section.id} section={section} subject={subject}/>
                    })}
                </>
                }
            </div>
        </div>
    )
}

function Section({section, subject}) {
    return (
        <div className="widget">
            <div className="widget-header">
                <div className="widget-title">{section.title}</div>
            </div>
            <div className='widget-content'>
                <Topics topics={section.topics} subject={subject}/>
            </div>
        </div>
    )
}

function Topics({topics, subject}) {
    return(
        <div className='topics'>
            {topics && 
            <>
                {topics.map(topic => {
                    return <Topic key={topic.id} topic={topic} subject={subject}/>
                })}
            </>
            }
        </div>
    )
}

function Topic({topic, subject}) {
    const data = useData((state) => state.data)
    const [loading, setLoading] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    const token = useStore((state) => state.token)
    const [notes, setNotes] = useState(() => {
        let x = {}
        if (data.notes) {
            for (let i=0; i<data.notes.length; i++) {
                x[data.notes[i].topic.id] = data.notes[i].content
            }
        }
        return x
    })

    function skill_level(id){
        const topics = data.skill_level.topics
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id == id){
                return topics[i].level
            }
        }
        return console.log("topic level not found")
    }

    function onChange(event) {
        setNotes({
            ...notes,
            [topic.id]: event.target.value,
        });
    }

    const notesField = (
        <textarea className='notes-field' placeholder='Type here...' value={notes[topic.id]} onChange={onChange}></textarea>
    )

    async function saveNote() {
        const noteContent = notes[topic.id]
        
        const response = await fetch(`${API_URL}/api/app/notes-save/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({"topic": topic.id, "content": notes[topic.id].trim()}),
        })
    }

    const noteSaveButton = (
        <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-transparent bg-secondery px-4 py-2 text-sm font-medium text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => {setIsOpen(false); saveNote();}}
        >
            Save
        </button>
    )

    async function practiceExercise(topicID, setLoading) {
        setLoading(true)
    
        const key = localStorage.getItem("key");
    
        try {
            const response = await fetch(`${API_URL}/api/app/topic/${topicID}/`, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: token,
                },
            });
    
            if (response.ok) {
                const data = await response.json();
                Router.push(`exercise/${data.exercise_id}/`)
                }
                
            return;
    
        } catch (err) {
            console.log(err);
            return;
        }
    }

    return(
        <>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} title={"Notes"} content={notesField} button={noteSaveButton}/>
            <div className='rows practice'>
                <div className='left'>
                    <div className='topic-skill-level' style={{backgroundColor: `rgba(var(--${subject.toLowerCase()}-dark), 0.07)`}}>
                        <Skill_level subject={subject.toLowerCase()} level={skill_level(topic.id)}/>
                    </div>
                    <div className='topic-title'>
                        {topic.title}
                    </div>
                </div>
                <div className='right'>
                    <button className='notes' onClick={() => {setIsOpen(true); {!notes[topic.id] && setNotes({...notes, [topic.id]:""})}}}>
                        <Notes_icon/>
                        Notes
                    </button>
                    {loading 
                    ?
                    <Button className={"flex justify-center items-center px-10 py-3"} buttonStyle={"btn--primary--outline"} buttonSize={"btn--small"}><PulseLoader size={5} color={"#25114E"}/></Button>
                    : 
                    <Button onClick={() => practiceExercise(topic.id, setLoading)} buttonStyle={"btn--primary--outline"} buttonSize={"btn--small"}>Practice</Button>
                    }
                </div>
            </div>
        </>
    )
}