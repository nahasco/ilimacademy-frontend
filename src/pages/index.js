import Link from 'next/link'
import HeaderMain from '../components/layout/Header'
import Layout from '../components/layout/Layout'
import Skill_level from '../components/Skill_level'
import useStore from '../stores/userStore'
import ActivityRings from "../components/ActivityRings"
import useData from "../stores/useData"
function Dashboard() {
  const user = useStore((state) => state)
  const data = useData((state) => state.data)

  function skill_level_find(subject) {
    for (let i = 0; i < 3; i++) {
      if (subject.toLowerCase() == data.skill_level.subjects[i].subject.toLowerCase()) {
        return data.skill_level.subjects[i].level
      }
    }
  }
  
  return (
  <>
    <HeaderMain heading={`Hi, ${user.username}`} ></HeaderMain>
    <div className='practice-widget-container'>
      <div className='practice-widget math-wdgt'>
        <div className='practice-widget-title'>Math</div>
        <Link href="/practice/math"><button className='practice-widget-button'>Start Practicing</button></Link>
      </div>
      <div className='practice-widget iq-wdgt'>
        <div className='practice-widget-title'>IQ</div>
        <Link href="/practice/iq"><button className='practice-widget-button'>Start Practicing</button></Link>
      </div>
      <div className='practice-widget geometry-wdgt'>
        <div className='practice-widget-title'>Geometry</div>
        <Link href="/practice/geometry"><button className='practice-widget-button'>Start Practicing</button></Link>
      </div>
    </div>

    <div className='widgets-container'>
      <div className='widget progress-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Progress</div>
          <button>?</button>
        </div>
        <div className='underdev'>This feature is under development</div>
      </div>

      <div className='widget skill-level-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Skill Level</div>
          <button>?</button>
        </div>
        <div className='skill-level-wdgt-content'>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level level={skill_level_find("math")} subject="math"/></div>
            <div className='skill-level-title-wdgt'>Math</div>
          </div>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level level={skill_level_find("iq")} subject="iq"/></div>
            <div className='skill-level-title-wdgt'>IQ</div>
          </div>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level level={skill_level_find("geometry")} subject="geometry"/></div>
            <div className='skill-level-title-wdgt'>Geometry</div>
          </div>
        </div>
      </div>

      <div className='widget todays-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Today's Progress</div>
          <button>?</button>
        </div>
        <div className='widget-content'>
          <ActivityRings math={40} iq={25} geometry={67} height={"140px"}/>
          <div className='rings-keys'>
            <div className='key'>
              <div className='key-color math'></div>
              <div className='key-label'>Math</div>
            </div>
            <div className='key'>
              <div className='key-color iq'></div>
              <div className='key-label'>IQ</div>
            </div>
            <div className='key'>
              <div className='key-color geometry'></div>
              <div className='key-label'>Geometry</div>
            </div>
          </div>
        </div>
      </div>
      <div className='widget streak-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Login Streak</div>
          <button>?</button>
        </div>
        <div className='underdev'>This feature is underdevelopment</div>
      </div>
    </div>
  </>
  )
}

Dashboard.getLayout = function getLayout(Dashboard) {
  return (
    <Layout>
      {Dashboard}
    </Layout>
  )
}

export default Dashboard