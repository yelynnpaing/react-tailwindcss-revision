import React, { useState } from 'react'

const Check = () => {

    const [done, setDone] = useState("true");
    console.log(done);

    const handleDone = (event) => {
        setDone(!done);
    }
  return (
    <div className="flex items-center gap-3">
        <input type="checkbox" className="w-4 h-4" name="x" id="x" 
        value={done}
        onChange={handleDone}
        />
        <label htmlFor="x" className="text-xl cursor-pointer select-none">Accept Terms and Conditions</label>
    </div>
  )
}

export default Check