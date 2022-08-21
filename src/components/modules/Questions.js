import { useState, useEffect } from 'react'
import QuestionsPagination from './QuestionsPagination';
import Choice from './Choice';

export default function Questions({ questions }) {
    const [selectedChoice, setSelectedChoice] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(() => {
      let x = {}
      for (let i=0; i<questions.length; i++) {
        x[questions[i].id] = false
      }
      return x;
    });
    const question = questions[currentQuestion];
    
    function nextQuestion() {
      setCurrentQuestion(prevState => prevState + 1)
    }
  
    function submitAnswer() {
      setIsSubmitted({
        ...isSubmitted,
        [question.id]: true
      })
    }
  
    function footerButton() {
      if (isSubmitted[question.id]) {
        if ((currentQuestion + 1) == questions.length) {
          return <button disabled={!Object.values(isSubmitted).every(value => value === true)} onClick={nextQuestion} className="question-next-button outlined">End Exercise</button> 
        }
        return <button onClick={nextQuestion} className="question-next-button outlined">Next Question</button>
      }
      return <button onClick={submitAnswer} disabled={selectedChoice[question.id] == undefined || isSubmitted[question.id]} className="question-check-button outlined">Check Answer</button>
    }
  
    return (
      <>
        <main className="question-container">
          <div className="question-header">
            <div className="question-title">Question {currentQuestion+1}</div>
            <button className="question-stuck">Stuck</button>
          </div>
          <div className="question-content">{question.content}</div>
          <div className="question-choices">
            {question.choices.map(choice => {
              return <Choice setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} question={question} choice={choice} isSubmitted={isSubmitted}/>
            })}
          </div>
        </main>
        <footer className="footer">
          <div className="innerfooter">
            <QuestionsPagination questionsNumber={questions.length} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
            {footerButton()}
          </div>
        </footer>
      </>
    )
  }