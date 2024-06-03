
const Form = () => {
  return (
    <div className="flex mb-5">
      <input id="inputText" type="text" className="focus-visible:outline-none border-2 border-blue-600 w-full px-3 flex-grow" />
      <button id="addBtn" className="bg-blue-600 text-white font-bold p-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>    
  </div>
  )
}

export default Form