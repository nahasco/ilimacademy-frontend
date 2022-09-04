import { API_URL } from "../config";

export async function getAuthenticatedUser() {
    const defaultReturnObject = { authenticated: false, user: null };

    try {
        const token = localStorage.getItem("key");

        if (!token || token == "undefined" || token == null) {
            return defaultReturnObject;
        }

        const response = await fetch(`${API_URL}/api/account/user/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
        const data = await response.json();

        let authenticated;
        response.ok ? (authenticated = true) : (authenticated = false);
        
        return { authenticated: authenticated, user: data.username };
    } catch (err) {
        console.log(err);
        return defaultReturnObject;
    }
}

export async function getUserData() {
    const token = localStorage.getItem("key");

    const fetcher = async (url, key) => {
        const res = await fetch(url, { headers: { Authorization: "Token " + key, "Content-type": "application/json" } })
      
        // If the status code is not in the range 200-299,
        // we still try to parse and throw it.
        if (!res.ok) {
          const error = new Error('An error occurred while fetching the data.')
          // Attach extra info to the error object.
          error.info = await res.json()
          error.status = res.status
          throw error
        }
      
        return res.json()
    }

    try {
        const response = await fetch(`${API_URL}/api/app/data/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return;
    }
}
