import React from 'react'
import Heading from './Heading'
import Form from './Form'
import Status from './Status'
import ListGroup from './ListGroup'

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-10 border w-1/3">
        <Heading appTitle="To Do List" />
        <Form />
        <Status />
        <ListGroup />
      </div>
    </div>
  )
}

export default App