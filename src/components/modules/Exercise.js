import Questions from "./Questions"
import Skill_level from "../Skill_level"

export default function Exercise({ data }) {
    const questions = data.questions
  
    return (
      <div className="exercise-body">
        <header className='exercise-header'>
          <div className="exercise-innerheader">
            <div className='exercise-header-topic'>
              <Skill_level level={2} subject="math"/>
              <div>Topic 1</div>
            </div>
            <div className='exercise-header-logo'>
              <img src='/Ilim.svg' alt=''></img>
            </div>
            <div className='exercise-header-button'>Exit</div>
          </div>
        </header>
        <Questions questions={questions} />
      </div>
    )
  }