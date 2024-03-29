import Latex from "react-latex-next"

export default function Choice({setSelectedChoice, selectedChoice, question, choice, isSubmitted, checkQuestion, setCheckQuestion}) {
    function choiceClassNames () {
      if (selectedChoice[question.id] == choice.id) {
        if (isSubmitted[question.id]) {
          if (choice.correct) {
            return "answeredCorrectly"
          } 
          return "answeredInCorrectly"
        }
        return "selected"
      }
      if (isSubmitted[question.id] && choice.correct) {
        return "correctAnswer"
      }
    }
    
    return (
      <button 
        disabled={isSubmitted[question.id]}
        onClick={() => {setSelectedChoice({...selectedChoice, [question.id]: choice.id}); setCheckQuestion({...checkQuestion, [question.id]: choice.correct});}}
        className={"choice " + choiceClassNames()} key={choice.id}
        >
        <div className="choice-letter">{choice.letter}</div>
        <div className="choice-content"><Latex>{choice.content}</Latex></div>
      </button>
    )
  }