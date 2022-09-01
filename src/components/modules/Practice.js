import ActivityRings from "../ActivityRings"
import Skill_level from "../Skill_level"
import {useState} from 'react'

export default function Practice(props) {
    const [selected, setSelected] = useState(1)

    function select(id) {
        setSelected(id)
    }

    const topics = [
        {"title": "Topic 1", "id": "1"},
        {"title": "Topic 2", "id": "2"},
        {"title": "Topic 3", "id": "3"},
        {"title": "Topic 4", "id": "4"}
    ]
    
    return (
        <div className="practice-top">
            <div className="widget recommended-practice">
                <div className="widget-header">
                    <div className="widget-title">Recommended Practice</div>
                </div>
                <div className="widget-content">
                    <div className="recommended-topics">
                        {topics.map(topic => {
                            return (
                                <div 
                                key={topic.id}
                                onClick={() => select(topic.id)}
                                style={{backgroundColor: selected == topic.id && `var(--${props.subject.toLowerCase()}-light)`}}
                                className={"recommended-topic " + (selected == topic.id ? "selected" : "")}>
                                    {topic.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className="recommended-topic-skill-level">
                        <Skill_level level={1} subject={props.subject.toLowerCase()}/>
                        <button className="outlined">Practice</button>
                    </div>
                </div>
            </div>
            <div className="widget progress">
                <div className="widget-header">
                    <div className="widget-title">{props.subject} Progress</div>
                </div>
                <div className="widget-content">
                    <div className="subject-today-progress">
                        <div className="subject-today-progress-title">Today</div>
                        <ActivityRings progress={50} subject={props.subject} height="150px" text={true}/>
                    </div>
                    <div className="subject-last-progress">
                        <div className="subject-last-progress-title">Last 7 Days</div>
                        <div className="rings-last-7-days">
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                            <ActivityRings progress={50} subject={props.subject} height="37px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
