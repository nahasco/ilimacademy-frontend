import ActivityRings from "../ActivityRings"
import Skill_level from "../Skill_level"
import {useState} from 'react'
import useData from "../../stores/useData"

import * as Tooltip from '@radix-ui/react-tooltip';



export default function Practice(props) {
    const [selected, setSelected] = useState(1)
    const data = useData((state) => state.data)

    function select(id) {
        setSelected(id)
    }

    const topics = [
        {"title": "Topic 1", "id": "1"},
        {"title": "Topic 2", "id": "2"},
        {"title": "Topic 3", "id": "3"},
        {"title": "Topic 4", "id": "4"}
    ]
    
    Date.prototype.withoutTime = function () {
        var d = new Date(this);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    
    const today = new Date()

    function minusDate(days) {
        const x =  new Date()
        const date = new Date(x.setDate(x.getDate() - days))
        return date.withoutTime()
    }


    // for (let i=0; i<data.progress.last_5_days.length; i++) {
    //     new Date(data.progress.last_5_days[i].date).withoutTime().getTime() == minusDate(5-i).getTime() ? console.log(true) : console.log(false)
    //     console.log(minusDate(5-i))
    //     console.log(new Date(data.progress.last_5_days[i].date).withoutTime())
    // }

    var todays_progress = null
    const days = []

    for (let h=1; h<6; h++) {
        console.log(minusDate(6-h))
        var found = null

        for (let i=0; i<6; i++) {
            if (new Date(data.progress.last_5_days[i].date).withoutTime().getTime() == minusDate(0).getTime()) {
                todays_progress = data.progress.last_5_days[i]
            }

            if (minusDate(6-h).getTime() == new Date(data.progress.last_5_days[i].date).withoutTime().getTime()) {
                days.push(data.progress.last_5_days[i])
                found = true
            }

            if (i==5 && !found) {
                days.push(null)
            }
        }
    }
    console.log(days)


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
                        {
                        todays_progress 
                        ?
                        <ActivityRings 
                            total={todays_progress[`${props.subject.toLowerCase()}_progress`]} 
                            progress={(todays_progress[`${props.subject.toLowerCase()}_progress`]/todays_progress[`${props.subject.toLowerCase()}_total`])*100} 
                            subject={props.subject} 
                            height="150px" 
                            text={true}/>
                        :
                        <ActivityRings
                            total={0} 
                            progress={0} 
                            subject={props.subject} 
                            height="150px" 
                            text={true}/>
                        }
                    </div>
                    <div className="subject-last-progress">
                        <div className="subject-last-progress-title">Last 5 Days</div>
                        <div className="rings-last-7-days">
                            {(days).map((ring, index) => (
                                ring
                                ?
                                (<ActivityRings 
                                key={ring.id} 
                                total={ring[`${props.subject.toLowerCase()}_progress`]} 
                                progress={(ring[`${props.subject.toLowerCase()}_progress`]/ring[`${props.subject.toLowerCase()}_total`])*100} 
                                subject={props.subject} 
                                height="37px" 
                                text={true}/>)
                                :
                                (<ActivityRings
                                key={`ring${index}`} 
                                total={0} 
                                progress={0} 
                                subject={props.subject} 
                                height="37px" 
                                text={true}/>)
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
