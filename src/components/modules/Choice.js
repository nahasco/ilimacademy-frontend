export default function Choice({setSelectedChoice, selectedChoice, question, choice, isSubmitted}) {

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
        onClick={() => setSelectedChoice({...selectedChoice, [question.id]: choice.id})}
        className={"choice " + choiceClassNames()} key={choice.id}
        >
        <div className="choice-letter">{choice.letter}</div>
        <div className="choice-content">{choice.content}</div>
      </button>
    )
  }