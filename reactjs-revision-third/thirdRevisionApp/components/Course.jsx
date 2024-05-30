const Course = ({title, student}) => {

    const borderBgClass = student === 0 ? "bg-red-100 border-red-400" : "bg-gray-100 border-gray-400";
  return (
    student > 0 &&
    <div className= {`font-mono ${borderBgClass} border-l-8 hover:bg-gray-200 flex gap-3 p-5`}>
        <p>{student}</p>
        <p>{title}</p>
    </div>
  )
}

export default Course