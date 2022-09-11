export default function Skill_level(props) {

  return (
    <svg className={`skill-level-icon ${props.subject.toLowerCase()} level-${props.level}`} width="80" height="52" viewBox="0 0 83.91 50.26" fill="none">
      <path className='level l4' d="M76.57,19.67a39.78,39.78,0,0,1,4.15,30,.77.77,0,0,1-.75.58h-12a.78.78,0,0,1-.73-1.06,26.1,26.1,0,0,0-1-21C66.87,27.94,66.56,28,76.57,19.67Z"/>
      <path className='level l3' d="M44.61,0A40,40,0,0,1,74,15.75L63.88,24.21A26.31,26.31,0,0,0,44.61,13.14V0Z"/>
      <path className='level l2' d="M39.93,0V13.14a26.14,26.14,0,0,0-19.3,11.05L10.57,15.75A39.6,39.6,0,0,1,39.93,0Z"/>
      <path className='level l1' d="M8,19.67c10,8.37,9.69,8.26,10.31,8.51a26.37,26.37,0,0,0-.93,21,.78.78,0,0,1-.73,1.06H4.56a.78.78,0,0,1-.75-.58A39.8,39.8,0,0,1,8,19.67Z"/>
      <path className='arrow' d="M36.85,46.12l-11.3-3a2.34,2.34,0,1,1,1.19-4.53l11.3,3a5.22,5.22,0,1,1-1.19,4.53Z" fill="#313131"/>
    </svg>
  )
}

