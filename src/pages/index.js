import { useContext } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Skill_level from '../components/Skill_level'

import useStore from '../stores/userStore'

export default function Dashboard() {
  const user = useStore((state) => state)
  return (
  <>
    <Header heading={`Hi, ${user.username}`} ></Header>
    <div className='practice-widget-container'>
      <div className='practice-widget math-wdgt'>
        <div className='practice-widget-title'>Math</div>
        <button className='practice-widget-button'>Start Practicing</button>
      </div>
      <div className='practice-widget iq-wdgt'>
        <div className='practice-widget-title'>IQ</div>
        <button className='practice-widget-button'>Start Practicing</button>
      </div>
      <div className='practice-widget geometry-wdgt'>
        <div className='practice-widget-title'>Geometry</div>
        <button className='practice-widget-button'>Start Practicing</button>
      </div>
    </div>

    <div className='widgets-container'>
      <div className='widget progress-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Progress</div>
          <button>?</button>
        </div>
        <div className='underdev'>This feature is underdevelopment</div>
      </div>

      <div className='widget skill-level-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Skill Level</div>
          <button>?</button>
        </div>
        <div className='skill-level-wdgt-content'>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level level="2" subject="math"/></div>
            <div className='skill-level-title-wdgt'>Math</div>
          </div>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level level="3" subject="iq"/></div>
            <div className='skill-level-title-wdgt'>IQ</div>
          </div>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level level="4" subject="geometry"/></div>
            <div className='skill-level-title-wdgt'>Geometry</div>
          </div>
        </div>
      </div>

      <div className='widget todays-wdgt'>
        <div className='widget-header'>
          <div className='widget-title'>Today's Progress</div>
          <button>?</button>
        </div>
        <div className='underdev'>This feature is underdevelopment</div>
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