import { useState, useEffect } from 'react'
import QuestionsPagination from './QuestionsPagination';
import Choice from './Choice';
import submitQuestion from '../../utils/submitQuestion';

export default function Questions({ questions }) {
    const [selectedChoice, setSelectedChoice] = useState(() => {
      let x = {}
      for (let i=0; i<questions.length; i++) {
        if (questions[i].status[0].selected_choice) {
          x[questions[i].id] = questions[i].status[0].selected_choice
        } 
      }
      return x;
    });

    const [currentQuestion, setCurrentQuestion] = useState(() => {
      for (let i=0; i<questions.length; i++) {
        if (questions[i].status[0].selected_choice) {
          if(!questions[i+1].status[0].selected_choice) {
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
        if (questions[i].status[0].selected_choice) {
          x[questions[i].id] = true
        } else {
        x[questions[i].id] = false
        }
      }
      return x;
    });
    
    const question = questions[currentQuestion];
    
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
        selected_choice_id: selectedChoice[question.id]
      }
      submitQuestion(data);
    }
  
    function footerButton() {
      if (isSubmitted[question.id]) {
        if ((currentQuestion + 1) == questions.length) {
          return <button disabled={!Object.values(isSubmitted).every(value => value === true)} className="question-next-button outlined">End Exercise</button> 
        }
        return <button onClick={() => nextQuestion()} className="question-next-button outlined">Next Question</button>
      }
      return <button onClick={() => submit()} disabled={selectedChoice[question.id] == undefined} className="question-check-button outlined">Check Answer</button>
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
              return <Choice key={choice.id} setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} question={question} choice={choice} isSubmitted={isSubmitted}/>
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