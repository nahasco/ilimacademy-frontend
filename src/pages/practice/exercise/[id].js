import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
import { API_URL } from '../../../config';
import FullPageLoader from '../../../components/FullPageLoader'
import Exercise from '../../../components/modules/Exercise';

export default function ExercisePage() {
  const router = useRouter()
  const id = router.query.id
  const key = localStorage.getItem("key");

  //check if id is a valid number
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
  const { data, error } = useSWR([`${API_URL}/api/app/exercise/${id}/`, key], fetcher)
  
  if (!isFinite(id)) {
    return <div>404 not found</div>
  }

  if (error) {
    if (error.status == 404) {
      return <div>404 not found</div>
    }
    return <div>{error.info.error}</div>
  }

  if (data) {
    if (data.length == 0) {
      return <div>No exercises available, choose another topic</div>
    }
    return <Exercise data={data}/>
  }
  return <FullPageLoader/>
}


