import React from 'react'
import Notes_icon from '../../icons/notes_icon'
import useData from '../../stores/useData'
import Skill_level from '../Skill_level'
import Button from './Button'

export default function Sections(props) {
    const data = useData((state) => state.data)

    let sections
    for (let i = 0; i < 4; i++) {
        if (data.subjects[i].title == props.subject) {
            sections = data.subjects[i].sections
            break
        } 
    }   

    return (
        <div className="practice-all">
            <div className="practice-all-header">
                <div className="title">All {props.subject} Practice</div>
                <div className="description">You can choose whatever topic you want and start practicing</div>
            </div>
            <div className='sections'>
                {sections && 
                <>
                    {sections.map(section => {
                        return <Section key={section.id} section={section} />
                    })}
                </>
                }
            </div>
        </div>
    )
}

function Section({section}) {
    return (
        <div className="widget">
            <div className="widget-header">
                <div className="widget-title">{section.title}</div>
            </div>
            <div className='widget-content'>
                <Topics topics={section.topics}/>
            </div>
        </div>
    )
}

function Topics({topics}) {
    return(
        <div className='topics'>
            {topics && 
            <>
                {topics.map(topic => {
                    return <Topic key={topic.id} topic={topic}/>
                })}
            </>
            }
        </div>
    )
}

function Topic({topic}) {
    const data = useData((state) => state.data)

    function skill_level(id){
        const topics = data.skill_level.topics
        for (var i = 0; i < topics.length; i++) {
            if (topics[i].id == id){
                return topics[i].level
            }
        }
        return console.log("topic level not found")
    }

    return(
        <div className='topic'>
            <div className='left'>
                <div className='topic-skill-level'>
                    <Skill_level subject={"math"} level={skill_level(topic.id)}/>
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
                <Button type="outlined">Practice</Button>
            </div>
        </div>
    )
}