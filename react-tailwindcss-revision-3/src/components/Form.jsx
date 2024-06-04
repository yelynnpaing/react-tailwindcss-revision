import { useState } from "react"

const Form = ({addTask}) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    const newTask = {
      id:Date.now,
      job:input,
      isDone:false,
    };
    //console.log(newTask);

    addTask(newTask);
    setInput("");
  };

  return (
    <div className="flex mb-5">
      <input id="inputText" type="text" className="focus-visible:outline-none border-2 border-blue-600 w-full px-3 flex-grow" 
      value={input}
      onChange={handleInput}
      />
      <button id="addBtn" className="bg-blue-600 text-white font-bold p-3" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>    
  </div>
  )
}

export default Form