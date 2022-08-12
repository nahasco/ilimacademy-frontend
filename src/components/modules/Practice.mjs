
export default function Practice(props) {
    
    return (
        <div className="practice-top">
            <div className="widget recommended-practice">
                <div className="widget-header">
                    <div className="widget-title">Recommended Practice</div>
                </div>
                <div className="widget-content">Content</div>
            </div>
            <div className="widget progress">
                <div className="widget-header">
                    <div className="widget-title">{props.subject} Progress</div>
                </div>
            </div>
        </div>
    )
}
