import CourseGruop from "./components/CourseGruop"
import Heading from "./components/Heading"

const App = () => {
  return (
    <div className="max-w-sm mx-auto border-2 shadow-xl p-5 m-5">
      <Heading />
      <CourseGruop />
    </div>
  )
}

export default App