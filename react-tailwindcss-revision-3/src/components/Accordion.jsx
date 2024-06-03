import React, { useState } from 'react'

const Accordion = ({id, question, answer}) => {

    const [open, setOpen] = useState(false);    

    const handleOpen = () => {
        setOpen(!open);
    }

  return (
    <div className="mb-[1px]">
        <div className="bg-blue-400 p-4 rounded flex justify-between" onClick={handleOpen}>
            <h4 className="text-normal cursor-pointer select-none">{question}{id}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className={`size-6 duration-300 ${!open && "rotate-180 duration-300"}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

        </div>
        {open && <div className="bg-gray-200 p-4 animate__animated animate__fadeIn">
            <p>
                {answer}
            </p>
        </div>}
    </div>
  )
}

export default Accordion