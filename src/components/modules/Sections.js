import React from 'react'
import Notes_icon from '../../icons/notes_icon'
import useData from '../../stores/useData'
import Skill_level from '../Skill_level'
import Link from "next/link"
import practiceExercise from "../../utils/practiceExercise"
import useStore from '../../stores/userStore'
import FullPageLoader from '../FullPageLoader'

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
    const setLoading = useStore((state) => state.setLoading)
    const loading = useStore((state) => state.loading)

    function skill_level(id){
        const topics = data.skill_level.topics
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id == id){
                return topics[i].level
            }
        }
        return console.log("topic level not found")
    }

    if (loading) return <FullPageLoader/>

    return(
        <div className='rows'>
            <div className='left'>
                <div className='topic-skill-level' style={{backgroundColor: `rgba(var(--${subject.toLowerCase()}-dark), 0.07)`}}>
                    <Skill_level subject={subject.toLowerCase()} level={skill_level(topic.id)}/>
                </div>
                <div className='topic-title'>
                    {topic.title}
                </div>
            </div>
            <div className='right'>
                <button className='notes'>
                    <Notes_icon/>
                    Notes
                </button>
                <button onClick={() => practiceExercise(topic.id, setLoading)} className="outlined">Practice</button>
            </div>
        </div>
    )
}