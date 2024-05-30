import React from 'react'
import Heading from './Heading'
import Form from './Form'
import Status from './Status'
import ListGroup from './ListGroup'

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="">
        <Heading appTitle="To Do List" />
        <Form />
        <Status />
        <ListGroup />
      </div>
    </div>
  )
}

export default App