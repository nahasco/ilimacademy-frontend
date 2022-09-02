import Questions from "./Questions"
import Skill_level from "../Skill_level"
import { useState } from "react"
import { API_URL } from "../../config";
import useStore from "../../stores/userStore";
import Image from "next/image";

export default function Exercise({ data }) {
  const questions = data.exercise.questions
  const key = useStore((state) => state.key)
  const [isComplete, setIsComplete] = useState(data.completed)
  const [results, setResults] = useState(data.results)
  const [seeResults, setSeeResults] = useState(data.completed)
  
  async function endExercise() {
    const response = await fetch(`${API_URL}/api/app/exercise/end/`, {
      method: "POST",
      headers: {
          "Content-type": "application/json",
          Authorization: "Token " + key
      },
      body: JSON.stringify({"exercise_token": data.etoken}),
    })
    const result = await response.json()
    setResults(result)
    setIsComplete(true)
    setSeeResults(true)
    console.log(result)
    return
  }
  
  return (
    <div className="exercise-body">
      <header className='exercise-header'>
        <div className="exercise-innerheader">
          <div className='exercise-header-topic'>
            <Skill_level level={2} subject={data.exercise.subject.toLowerCase()}/>
            <div>{data.exercise.topic.title}</div>
          </div>
          <div className='exercise-header-logo'>
            <Image src='/Ilim.svg' alt=''></Img>
          </div>
          <div className='exercise-header-button'>Exit</div>
        </div>
      </header>
      <Questions subject={data.exercise.subject} topic={data.exercise.topic.title} questions={questions} qtokens={data.qtokens} etoken={data.etoken} endExercise={endExercise} isComplete={isComplete} results={results} seeResults={seeResults} setSeeResults={setSeeResults}/>
    </div>
  )
}