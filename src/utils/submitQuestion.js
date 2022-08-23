import { API_URL } from "../config";

export default async function submitQuestion(data) {
    try {
        const token = localStorage.getItem("key");

        const response = await fetch(`${API_URL}/api/app/question/submit/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result)
        return result;
    } catch (err) {
        console.log(err);
        return;
    }
}