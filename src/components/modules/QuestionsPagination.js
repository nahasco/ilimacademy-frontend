export default function QuestionsPagination({questionsNumber, currentQuestion, setCurrentQuestion, questions}) {
    const questionNumbers = [];
  
    for (let i=1; i <= questionsNumber; i++) {
      questionNumbers.push(i)
    }
  
    function paginate(number) {
      setCurrentQuestion(number.number - 1);
    }

    function numberClassNames(number) {
      if (questions[number-1].status[0].selected_choice) {
        if (questions[number-1].status[0].correct) {
          return "correct"
        }
        return "incorrect"
      }
      return ""
    }
    
    return (
      <button className="question-pagination">
        {questionNumbers.map(number => {
          return <div
              key={number} 
              onClick={() => {paginate(number); setCurrentQuestion(number - 1)}} 
              className={"pagination-number " 
              + (currentQuestion == number - 1 ? "selected " : "") 
              + numberClassNames(number)}
              >
              {number} 
            </div>
        })}
      </button>
    )
  }