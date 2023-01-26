import { useState, useEffect } from 'react'
import QuestionsPagination from './QuestionsPagination';
import Choice from './Choice';
import Results from './Results';
import { API_URL } from '../../config';
import { Button } from '../Button';
import useStore from "../../stores/userStore"
import Latex from 'react-latex-next';
import { BarLoader, FadeLoader, MoonLoader, PuffLoader } from 'react-spinners';
import Loader from '../Loader';

export default function Questions({ subject, topic, questions, qtokens, etoken, endExercise, isComplete, results, seeResults, setSeeResults, loading }) {
  const [exerciseEnd, setExerciseEnd] = useState(false);
  const token = useStore((state) => state.token)
  const [loadingQuestion, setLoadingQuestion] = useState(false)
  const [checkQuestion, setCheckQuestion] = useState(() => {
    let x = {}
    for (let i=0; i<questions.length; i++) {
      if (qtokens[questions[i].id]) {
        if (qtokens[questions[i].id].correct) {
          x[questions[i].id] = true
        }
        else {
          x[questions[i].id] = false
        }
      }
    }
    return x
  });

  const [selectedChoice, setSelectedChoice] = useState(() => {
    let x = {}
    for (let i=0; i<questions.length; i++) {
      if (qtokens[questions[i].id]) {
        x[questions[i].id] = qtokens[questions[i].id].selected_choice
      } 
    }
    return x;
  });

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    for (let i=0; i<questions.length; i++) {
      if (!qtokens[questions[i].id]) return i
      if (i==questions.length-1) return questions.length-1
    }
  });

  const [isSubmitted, setIsSubmitted] = useState(() => {
    let x = {}
    for (let i=0; i<questions.length; i++) {
      if (qtokens[questions[i].id]) {
        x[questions[i].id] = true
      } else {
      x[questions[i].id] = false
      }
    }
    return x;
  });

  const question = questions[currentQuestion];

  useEffect(() => {
    if (seeResults) setCurrentQuestion()
  }, [seeResults])  

  function nextQuestion() {
    setCurrentQuestion(prevState => prevState + 1)
  }

  async function submitQuestion() {
    setLoadingQuestion(true)

    const data = {
      question_id: question.id,
      selected_choice_id: selectedChoice[question.id],
      exercise_token: etoken
    }

    try {
      const response = await fetch(`${API_URL}/api/app/question/submit/`, {
          method: "POST",
          headers: {
              "Content-type": "application/json",
              Authorization: token,
          },
          body: JSON.stringify(data),
      });

      if (response) setLoadingQuestion(false)

      if (response.ok) {
        setIsSubmitted({
          ...isSubmitted,
          [question.id]: true
        })
      }

    } catch (err) {
        console.log(err);
        return;
    } 
  } 

  function footerButton() {
    if (loadingQuestion || loading) {
      return (
      <Button buttonStyle={"btn--primary--solid"} buttonSize={"btn--small"} disabled={true} className="question-check-button">
        <div className='flex items-center gap-2'>
          <div>Checking Answer</div>
        </div>
      </Button>
      )
    }

    if (isComplete) {
      if (!seeResults) {
        return <Button onClick={() => {setSeeResults(true); setCurrentQuestion();}} className="question-next-button contained">View Results</Button> 
      } else {
        return
      }
    }
    if (isSubmitted[question.id]) {
      if ((currentQuestion + 1) == questions.length) {
        return <Button onClick={() => endExercise()} disabled={!Object.values(isSubmitted).every(value => value === true)} className="question-next-button">End Exercise</Button> 
      }
      return <Button onClick={() => nextQuestion()} buttonStyle={"btn--primary--solid"} buttonSize={"btn--small"} className="question-next-button">Next Question</Button>
    }
    return <Button onClick={() => submitQuestion()} buttonStyle={"btn--primary--solid"} buttonSize={"btn--small"} disabled={selectedChoice[question.id] == undefined} className="question-check-button">Check Answer</Button>
  }

  return (
    <>
      <main className='main-container'>
        <div className="question-container">
          { loading 
          ? <div className='flex justify-center items-center h-full'>
            <Loader size={50}/>
            </div> 
          : <>
              {seeResults ? <Results results={results} subject={subject} topic={topic}/> :
                <>
                  {/* <div className="question-header">
                    <div className="question-title">Question {currentQuestion+1}</div>
                    <button className="question-stuck">Stuck</button>
                  </div> */}
                  <div><Latex>{question.content}</Latex></div>
                  <div className="question-choices">
                    {question.choices.map(choice => {
                      return <Choice key={choice.id} setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} question={question} choice={choice} isSubmitted={isSubmitted} checkQuestion={checkQuestion} setCheckQuestion={setCheckQuestion}/>
                    })}
                  </div>
                </>
              }
            </>}
        </div>
      </main>

      <footer className="footer">
        { loadingQuestion && <div className='absolute right-0 left-0'><BarLoader width={"100%"}/></div>}
        <div className='footer-content'>
          <div className="innerfooter">
            <QuestionsPagination questionsNumber={questions.length} isSubmitted={isSubmitted} checkQuestion={checkQuestion} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questions={questions} setSeeResults={setSeeResults}/>
            {footerButton()}
          </div>
        </div>
      </footer>
    </>
  )
}