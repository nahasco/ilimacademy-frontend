import Link from "next/link"
import HeaderMain from "../components/Layout/Header"
import Layout from "../components/Layout/Layout"
import Skill_level from "../components/Skill_level"
import useStore from "../stores/userStore"
import ActivityRings from "../components/ActivityRings"
import useData from "../stores/useData"
import AreaGraph from "../components/AreaGraph"

function Dashboard() {
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
    <HeaderMain heading={`Hi, ${data.user.username}`} ></HeaderMain>
    <div className="practice-widget-container">
      <div className="practice-widget math-wdgt">
        <div className="practice-widget-title">Math</div>
        <Link href="/practice/math"><button className="outlined">Practice</button></Link>
      </div>
      <div className="practice-widget iq-wdgt">
        <div className="practice-widget-title">IQ</div>
        <Link href="/practice/iq"><button className="outlined">Practice</button></Link>
      </div>
      <div className="practice-widget geometry-wdgt">
        <div className="practice-widget-title">Geometry</div>
        <Link href="/practice/geometry"><button className="outlined">Practice</button></Link>
      </div>
    </div>

    <div className="widgets-container">
      <div className="widget progress-wdgt">
        <div className="widget-header">
          <div className="widget-title">Progress</div>
          <button>?</button>
        </div>
        <div className="widget-content">
          <AreaGraph data={data.progress_history}/>
        </div>
      </div>

      <div className="widget skill-level-wdgt">
        <div className="widget-header">
          <div className="widget-title">Skill Level</div>
          <button>?</button>
        </div>
        <div className="skill-level-wdgt-content widget-content">
          <div className="skill-level-container-wdgt">
            <div className="skill-level-icon-wdgt"><Skill_level level={skill_level_find("math")} subject="math"/></div>
            <div className="skill-level-title-wdgt">Math</div>
          </div>
          <div className="skill-level-container-wdgt">
            <div className="skill-level-icon-wdgt"><Skill_level level={skill_level_find("iq")} subject="iq"/></div>
            <div className="skill-level-title-wdgt">IQ</div>
          </div>
          <div className="skill-level-container-wdgt">
            <div className="skill-level-icon-wdgt"><Skill_level level={skill_level_find("geometry")} subject="geometry"/></div>
            <div className="skill-level-title-wdgt">Geometry</div>
          </div>
        </div>
      </div>

      <div className="widget todays-wdgt">
        <div className="widget-header">
          <div className="widget-title">Today's Progress</div>
          <button>?</button>
        </div>
        <div className="widget-content">
          <ActivityRings math={(data.progress.todays.math_progress/data.progress.todays.math_total)*100} iq={(data.progress.todays.iq_progress/data.progress.todays.iq_total)*100} geometry={(data.progress.todays.geometry_progress/data.progress.todays.geometry_total)*100} height={"140px"}/>
          <div className="rings-keys">
            <div className="key">
              <div className="key-color math"></div>
              <div className="key-label">Math</div>
            </div>
            <div className="key">
              <div className="key-color iq"></div>
              <div className="key-label">IQ</div>
            </div>
            <div className="key">
              <div className="key-color geometry"></div>
              <div className="key-label">Geometry</div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget streak-wdgt">
        <div className="widget-header">
          <div className="widget-title">Login Streak</div>
          <button>?</button>
        </div>
        <div className="widget-content">
          <div className="streak-number">{data.streak.number}</div>
          <div>Days</div>
        </div>
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