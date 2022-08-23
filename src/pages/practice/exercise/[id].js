import { useRouter } from 'next/router'
import useSWR from 'swr'
import { API_URL } from '../../../config';
import FullPageLoader from '../../../components/FullPageLoader'
import Exercise from '../../../components/modules/Exercise';

export default function ExercisePage() {
  const router = useRouter()
  const id = router.query.id
  const key = localStorage.getItem("key");

  const fetcher = (url, key) => fetch(url, { headers: { Authorization: "Token " + key, "Content-type": "application/json" } }).then((res) => res.json());
  const { data, error } = useSWR([`${API_URL}/api/app/exercise/${id}/`, key], fetcher)
  
  if (error) {
    return <div>We faced a problem loading the exercise, please try again later {error}</div>
  }

  if (data) {
    if (data.length == 0) {
      return <div>No exercises available, choose another topic</div>
    }
    return <Exercise data={data}/>
  }
  return <FullPageLoader/>
}


