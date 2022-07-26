import React from 'react'
import Skill_level_icon from '../icons/skill_level_icon'

export default function Dashboard() {
  return (
  <React.Fragment>
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
            <div className='skill-level-icon-wdgt'><Skill_level_icon level="2" subject="math"/></div>
            <div className='skill-level-title-wdgt'>Math</div>
          </div>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level_icon level="3" subject="iq"/></div>
            <div className='skill-level-title-wdgt'>IQ</div>
          </div>
          <div className='skill-level-container-wdgt'>
            <div className='skill-level-icon-wdgt'><Skill_level_icon level="4" subject="geometry"/></div>
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
  </React.Fragment>
  )
}
