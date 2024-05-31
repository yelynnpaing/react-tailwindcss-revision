import React from 'react'

const App = () => {

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

  const Name = "Academy Courses";

  return (
    <div className='m-5 max-w-md p-5 mx-auto border-1 border-gray-100 shadow-lg'>
      <h1 className='text-2xl font-serif text-blue-500 font-semibold mb-5 underline'>{Name}</h1>
      <ul className='space-y-1 pl-5'>
        {courses.filter((course) => course.student > 0).map((course) => 
          <li className={` p-2 border-l-4 hover:bg-gray-200 ${course.student === 0 ? 'bg-red-100' : 'bg-gray-100' }`} 
          key={course.id}>
            {`${course.student} ${course.title}`}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App