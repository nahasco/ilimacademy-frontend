import Head from "next/head";
import Router from "next/router.js";
import HeaderMain from "../components/Layout/Header.js";
import Layout from "../components/Layout/Layout";
import Skill_level from "../components/Skill_level.js";
import Result_icon from "../icons/result_icon.js";
import useData from "../stores/useData.js";

export default function HistoryPage() {
    const data = useData((state) => state.data)

    function skill_level(id){
        const topics = data.skill_level.topics
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id == id){
                return topics[i].level
            }
        }
        return console.log("topic level not found")
    }

    return (
        <>
            <HeaderMain heading={"History"}></HeaderMain>
            {data.history.map(history => {
                return (
                    <div key={history.id} className='rows history'>
                        <div className='left'>
                            <div className='topic-skill-level' style={{backgroundColor: `rgba(var(--${history.subject.toLowerCase()}-dark), 0.07)`}}>
                                <Skill_level subject={history.subject.toLowerCase()} level={history.new_skill_level}/>
                                <Result_icon result={history.result}/>
                            </div>
                            <div className='topic-title-date'>
                                <div className="topic-title">{history.topic.title}</div>
                                <div className="end-date under-title">{history.end_date}</div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className="end-date standalone">{history.end_date}</div>
                            <div className="results-summary">
                                <div className="result correct-num">{history.score}</div>
                                <div className="result wrong-num">{history.total - history.score}</div>
                                <div className="result total-num">{Math.round(history.score/history.total * 100)}%</div>
                            </div>
                            <button onClick={() => Router.push(`practice/exercise/${history.id}`)} className="outlined">View</button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

HistoryPage.getLayout = function getLayout(HistoryPage) {
    return <Layout>{HistoryPage}</Layout>;
};
