import Tabs from './Tabs'
import HeaderMain from './Header'

export default function PracticeLayout({ children }) {
  return (
    <>
        <HeaderMain heading={"Practice"}></HeaderMain>
        <div className="flex justify-center">
            <Tabs/>
        </div>
        <div>
            { children }
        </div>
    </>
  )
}
