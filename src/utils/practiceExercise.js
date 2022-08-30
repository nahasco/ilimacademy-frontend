import useSWR from "swr"
import { API_URL } from "../config";
import Router from "next/router";

export default async function practiceExercise(topicID) {
    const key = localStorage.getItem("key");

    try {
        const response = await fetch(`${API_URL}/api/app/topic/${topicID}/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Token ${key}`,
            },
        });
        if (!response.ok) {
            throw "errorx`x`"
        }
        const data = await response.json();
        Router.push(`exercise/${data.exercise_id}/`)
        return;

    } catch (err) {
        console.log(err);
        return;
    }
}
