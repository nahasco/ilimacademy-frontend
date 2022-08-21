export default function QuestionsPagination({questionsNumber, currentQuestion, setCurrentQuestion}) {
    const questionNumbers = [];
  
    for (let i=1; i <= questionsNumber; i++) {
      questionNumbers.push(i)
    }
  
    function paginate(number) {
      setCurrentQuestion(number.number - 1);
    }
    
    return (
      <button className="question-pagination">
        {questionNumbers.map(number => {
          return <div
              key={number} 
              onClick={() => {paginate(number); setCurrentQuestion(number - 1)}} 
              className={"pagination-number " + (currentQuestion == number - 1? "selected" : "")}
              >
              {number} 
            </div>
        })}
      </button>
    )
  }