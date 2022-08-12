import Tabs from './Tabs'
import Header from './Header'

export default function PracticeLayout({ children }) {
  return (
    <>
        <Header heading={"Practice"}></Header>
        <div className="flex justify-center">
            <Tabs/>
        </div>
        <div>
            { children }
        </div>
    </>
  )
}
