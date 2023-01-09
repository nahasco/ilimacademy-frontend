import Questions from "./Questions"
import Skill_level from "../Skill_level"
import { useState } from "react"
import { API_URL } from "../../config";
import useStore from "../../stores/userStore";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../Button";

export default function Exercise({ data }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const questions = data.questions
  const key = useStore((state) => state.key)
  const [isComplete, setIsComplete] = useState(data.completed)
  const [results, setResults] = useState(data.results)
  const [seeResults, setSeeResults] = useState(data.completed)
  const token = useStore((state) => state.token)
  
  async function endExercise() {
    setLoading(true)
    const response = await fetch(`${API_URL}/api/app/exercise/end/`, {
      method: "POST",
      headers: {
          "Content-type": "application/json",
          Authorization: token
      },
      body: JSON.stringify({"exercise_token": data.etoken}),
    })
    const result = await response.json()

    if (result) setLoading(false)

    setResults(result)
    setIsComplete(true)
    setSeeResults(true)
    return
  }
  
  return (
    <div className="exercise-body">
      <header className='exercise-header'>
        <div className="exercise-innerheader">
          <div className='exercise-header-topic'>
            <Skill_level level={data.topic.level} subject={data.subject.toLowerCase()}/>
            <div>{data.topic.title}</div>
          </div>
          <div className='exercise-header-logo'>
            <Image src='/Ilim.svg' alt='' width="50px" height="50px"></Image>
          </div>
          <div className="exercise-header-button">
            <Button onClick={() => router.back()} buttonStyle="btn--primary--outline" buttonSize={"btn--small"}>Exit</Button>
          </div>
        </div>
      </header>
      <Questions subject={data.subject} topic={data.topic.title} questions={questions} qtokens={data.qtokens} etoken={data.etoken} endExercise={endExercise} isComplete={isComplete} results={results} seeResults={seeResults} setSeeResults={setSeeResults} loading={loading}/>
    </div>
  )
}