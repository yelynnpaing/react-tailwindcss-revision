import React, { useState } from 'react'

const Input = () => {
    const [text, setText] = useState('');
    console.log(text);
    
    const inputHandler = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <p className="text-2xl font-bold mb-4">Input Test</p>
        <input type="text" className="border border-gray-400 px-3 py-1 rounded-lg" 
        value={text}
        onChange={inputHandler}
        />
        <p>{text}</p>
    </div>
  )
}

export default Input