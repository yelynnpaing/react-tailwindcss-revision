import Course from "./Course"

const CourseGruop = () => {

    const courses = [
        {
          id: 1,
          title: "Computer Science",
          student : 10
        },
        {
          id: 2,
          title: "Computer Technology",
          student : 15
        },
        {
          id: 3,
          title: "Information Technology",
          student : 0
        },
        {
          id: 4,
          title: "Cloud Computing",
          student : 9
        },
        {
          id: 5,
          title: "Cyber Security",
          student : 10
        },
      ];

  return (
    <div className="space-y-2 pl-5">
        {courses.map(({id, title, student}) => (
            <Course title={title} student={student} key={id}/>
        ))}
    </div>
  )
}

export default CourseGruop