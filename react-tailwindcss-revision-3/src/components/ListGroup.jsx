import List from "./List"
import { useState } from "react";

const ListGroup = ({tasks, deleteTask, checkTask}) => {
  
  return (
    <div className="p-5 border border-gray-300 shadow-sm space-y-2">
      {tasks.map(({id, job, isDone}) => 
        <List 
          key={id}  
          id={id}
          job={job}
          isDone={isDone}
          deleteTask={deleteTask}
          checkTask={checkTask}
        />
      )}
    </div>
  )
}

export default ListGroup