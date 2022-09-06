import Questions from "./Questions"
import Skill_level from "../Skill_level"
import { useState } from "react"
import { API_URL } from "../../config";
import useStore from "../../stores/userStore";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Exercise({ data }) {
  const router = useRouter()
  const questions = data.questions
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
            <Skill_level level={2} subject={data.subject.toLowerCase()}/>
            <div>{data.topic.title}</div>
          </div>
          <div className='exercise-header-logo'>
            <Image src='/Ilim.svg' alt='' width="50px" height="50px"></Image>
          </div>
          <div className="exercise-header-button">
            <button onClick={() => router.back()}>Exit</button>
          </div>
        </div>
      </header>
      <Questions subject={data.subject} topic={data.topic.title} questions={questions} qtokens={data.qtokens} etoken={data.etoken} endExercise={endExercise} isComplete={isComplete} results={results} seeResults={seeResults} setSeeResults={setSeeResults}/>
    </div>
  )
}