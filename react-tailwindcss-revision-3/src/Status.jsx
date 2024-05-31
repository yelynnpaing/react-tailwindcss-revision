
const Status = () => {
  return (
    <div className="flex justify-between mb-5">
      <p className="font-bold text-xl">Your List</p>
      <button className="py-1 px-1.5 bg-blue-500 rounded-full text-white font-semibold">
        done
        <span id="doneList" className="ps-2">0</span> / <span id="listCounter">0</span>
      </button>
    </div>
  )
}

export default Status