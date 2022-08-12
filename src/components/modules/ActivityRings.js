import React from 'react'

export default function ActivityRings() {
  return (
    <svg className="ActivityRings" >
        <g className="ring ring1" style={{transform: [{ rotate: '-90deg' }, {scale: 1}]}}>
            <circle strokeWidth="3" r="15.915" cx="50%" cy="50%" className="background" />
            <circle strokeWidth="3" r="15.915" cx="50%" cy="50%" className="completed" strokeDasharray="25, 100" />
        </g>
        <g className="ring ring2" transform="scale(0.75)" rotate="-90deg">
            <circle strokeWidth="4" r="15.915" cx="50%" cy="50%" className="background" />
            <circle strokeWidth="4" r="15.915" cx="50%" cy="50%" className="completed" strokeDasharray="85, 100" />
        </g>
        <g className="ring ring3" transform="scale(0.5)" rotate="-90deg">
            <circle strokeWidth="6" r="15.915" cx="50%" cy="50%" className="background" />
            <circle strokeWidth="6" r="15.915" cx="50%" cy="50%" className="completed" strokeDasharray="85, 100" />
        </g>
    </svg>
  )
}

