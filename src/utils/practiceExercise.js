import useSWR from "swr"
import { API_URL } from "../config";
import Router from "next/router";
import useStore from "../stores/userStore";

export default async function practiceExercise(topicID, setLoading) {
    setLoading(true)

    const key = localStorage.getItem("key");

    try {
        const response = await fetch(`${API_URL}/api/app/topic/${topicID}/`, {
            headers: {
                "Content-type": "application/json",
                Authorization: `Token ${key}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            Router.push(`exercise/${data.exercise_id}/`)
            }
        
        response && setLoading(false)

        return;

    } catch (err) {
        console.log(err);
        setLoading(false)
        return;
    }
}
