import { useState, useEffect } from 'react'
import QuestionsPagination from './QuestionsPagination';
import Choice from './Choice';
import submitQuestion from '../../utils/submitQuestion';
import endExercise from '../../utils/endExercise';
import Results from './Results';

export default function Questions({ subject, topic, questions, qtokens, etoken, endExercise, isComplete, results, seeResults, setSeeResults }) {
  const [exerciseEnd, setExerciseEnd] = useState(false);
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
      if (qtokens[questions[i].id]) {
        if(!qtokens[questions[i+1].id]) {
          return i+1
        }
      } else {
        return 0
      }
      return questions.length - 1
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

  function submit() {
    setIsSubmitted({
      ...isSubmitted,
      [question.id]: true
    })
    const data = {
      question_id: question.id,
      selected_choice_id: selectedChoice[question.id],
      exercise_token: etoken
    }
    submitQuestion(data);
  } 

  function footerButton() {
    if (isComplete) {
      if (!seeResults) {
        return <button onClick={() => {setSeeResults(true); setCurrentQuestion();}} className="question-next-button contained">View Results</button> 
      } else {
        return
      }
    }
    if (isSubmitted[question.id]) {
      if ((currentQuestion + 1) == questions.length) {
        return <button onClick={() => endExercise()} disabled={!Object.values(isSubmitted).every(value => value === true)} className="question-next-button contained">End Exercise</button> 
      }
      return <button onClick={() => nextQuestion()} className="question-next-button contained">Next Question</button>
    }
    return <button onClick={() => submit()} disabled={selectedChoice[question.id] == undefined} className="question-check-button contained">Check Answer</button>
  }

  return (
    <>
      <main className="question-container">
        {seeResults ? <Results results={results} subject={subject} topic={topic}/> :
          <>
            <div className="question-header">
              <div className="question-title">Question {currentQuestion+1}</div>
              <button className="question-stuck">Stuck</button>
            </div>
            <div className="question-content">{question.content}</div>
            <div className="question-choices">
              {question.choices.map(choice => {
                return <Choice key={choice.id} setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} question={question} choice={choice} isSubmitted={isSubmitted} checkQuestion={checkQuestion} setCheckQuestion={setCheckQuestion}/>
              })}
            </div>
          </>
        }
      </main>
      <footer className="footer">
        <div className="innerfooter">
          <QuestionsPagination questionsNumber={questions.length} isSubmitted={isSubmitted} checkQuestion={checkQuestion} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questions={questions} setSeeResults={setSeeResults}/>
          {footerButton()}
        </div>
      </footer>
    </>
  )
}