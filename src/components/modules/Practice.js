import ActivityRings from "./ActivityRings"

export default function Practice(props) {
    
    return (
        <div className="practice-top">
            <div className="widget recommended-practice">
                <div className="widget-header">
                    <div className="widget-title">Recommended Practice</div>
                </div>
                <div className="widget-content"></div>
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
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                            <ActivityRings progress={50} subject={props.subject} height="39px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
