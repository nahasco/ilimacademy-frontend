
export default function ActivityRings(props) {
  if (!props.math && !props.iq && !props.geometry) {
    const subject = props.subject.toLowerCase()
    
    return(
      <svg className="ActivityRings" viewBox='0 0 37 37' height={props.height}>
        <g className="ring">
          <circle strokeWidth="4" r="15.915" cx="50%" cy="50%" className="background" stroke={`var(--${subject}-light)`} />
          {props.progress != 0 && <circle strokeWidth="4" r="15.915" cx="50%" cy="50%" className="completed" stroke={`rgba(var(--${subject}-dark))`} strokeDasharray={`${props.progress}, 100`} />}
          {props.text && <text x="50%" y="50%" textAnchor="middle" fontSize="8px" fill={`rgba(var(--${subject}-dark))`} dy=".3em">{`${props.progress}%`}</text>}
        </g>
      </svg>
    )
  } else {
    return (
      <svg className="ActivityRings" viewBox='0 0 37 37' height={props.height}>
        <g className="ring ring1">
          <circle strokeWidth="3" r="15.915" cx="50%" cy="50%" className="background" />
          {props.math != 0 && <circle strokeWidth="3" r="15.915" cx="50%" cy="50%" className="completed" strokeDasharray={`${props.math}, 100`} />}
        </g>
        <g className="ring ring2">
          <circle strokeWidth="4" r="15.915" cx="50%" cy="50%" className="background" />
          {props.iq != 0 && <circle strokeWidth="4" r="15.915" cx="50%" cy="50%" className="completed" strokeDasharray={`${props.iq}, 100`} />}
        </g>
        <g className="ring ring3">
          <circle strokeWidth="6" r="15.915" cx="50%" cy="50%" className="background" />
          {props.geometry != 0 && <circle strokeWidth="6" r="15.915" cx="50%" cy="50%" className="completed" strokeDasharray={`${props.geometry}, 100`} />}
        </g>
      </svg>
    )
  }
}

