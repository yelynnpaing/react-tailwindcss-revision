import React, { useState } from 'react'
import Heading from './components/Heading'
import Form from './components/Form'
import Status from './components/Status'
import ListGroup from './components/ListGroup'
import Counter from './components/Counter'
import Input from './components/Input'
import Check from './components/Check'
import AccordionGroup from './components/AccordionGroup'

const App = () => {

  const [tasks, setTask] = useState([
    { id: 1, job: "Buy groceries", isDone: false },
    { id: 2, job: "Finish project", isDone: true },
    { id: 3, job: "Exercise", isDone: false },
    { id: 4, job: "Read a book", isDone: false },
    { id: 5, job: "Call a friend", isDone: true }
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const deleteTask = (id) => { 
    setTask(tasks.filter((el) => el.id != id));
  }

  const checkTask = (id) => {
    setTask(tasks.map((el) => (el.id === id ? {...el, isDone: !el.isDone} : el)));
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-10 border w-2/3">
        <Heading appTitle="To Do List" />
        <Form addTask={addTask} />
        <Status tasks={tasks} />
        <ListGroup checkTask={checkTask} deleteTask={deleteTask} tasks={tasks} />


        {/* <Counter /> */}
        {/* <Input /> */}
        {/* <Check /> */}
        {/* <AccordionGroup /> */}

      </div>
    </div>
  )
}

export default App