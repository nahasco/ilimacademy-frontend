import { API_URL } from "../config";

export async function getAuthenticatedUser() {
    const defaultReturnObject = { authenticated: false, user: null };
    try {
      const token = localStorage.getItem("key");
      if (!token || token == "undefined" || token == null) {
        return defaultReturnObject;
      }
      const response = await fetch(`${API_URL}/api/account/user/`,{
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
      });
      // const { authenticated = false } = response.data;
      let authenticated;
      response.ok ? authenticated = true : authenticated = false
      const data = await response.json();
      console.log({"authenticated": authenticated, "user": data.username})
      return {"authenticated": authenticated, "user": data.username};
    }
    catch (err) {
        console.log(err)
        return defaultReturnObject;
    }
  }