import RightArrow_icon from "../../icons/rightArrow_icon"
import FullPageLoader from "../FullPageLoader"
import Skill_level from "../Skill_level"

export default function Results({results, subject, topic}) {
    if (!results || results==undefined) {
        return <FullPageLoader />
    }
    console.log(subject)
    return (
        <div className="results">
            <div className="scores">
                <div className="correct-score score-container">
                    <div className="score-title">Correct Answers</div>
                    <div className="score">{results.score}</div>
                </div>
                <div className="incorrect-score score-container">
                    <div className="score-title">Wrong Answers</div>
                    <div className="score">{results.total - results.score}</div>
                </div>
                <div className="total-score score-container">
                    <div className="score-title">Total</div>
                    <div className="score">{Math.round(results.score/results.total * 100)}%</div>
                </div>
            </div>
            <div className="summary-container">
                <div className="summary">
                    <div className="topic-title">{topic}</div>
                    <div className="levels">
                        <div className="old-level">
                            <Skill_level subject={subject} level={results.old_skill_level}/>
                        </div>
                        <RightArrow_icon />
                        <div className="new-level">
                            <Skill_level subject={subject} level={results.new_skill_level}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

