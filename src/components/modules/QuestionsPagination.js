export default function QuestionsPagination({questionsNumber, qtokens, currentQuestion, setCurrentQuestion, questions, setSeeResults}) {
    const questionNumbers = [];
  
    for (let i=1; i <= questionsNumber; i++) {
      questionNumbers.push(i)
    }
  
    function paginate(number) {
      setCurrentQuestion(number.number - 1);
    }

    function numberClassNames(number) {
      if (qtokens[questions[number-1].id]) {
        if (qtokens[questions[number-1].id].correct) {
          return "correct"
        }
        return "incorrect"
      }
      return ""
    }
    
    return (
      <div className="question-pagination">
        {questionNumbers.map(number => {
          return <button
              key={number} 
              onClick={() => {paginate(number); setCurrentQuestion(number - 1); setSeeResults(false)}} 
              className={"pagination-number " 
              + (currentQuestion == number - 1 ? "selected " : "") 
              + numberClassNames(number)}
              >
              {number} 
            </button>
        })}
      </div>
    )
  }