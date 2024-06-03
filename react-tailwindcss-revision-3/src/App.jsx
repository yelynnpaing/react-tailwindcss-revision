import React from 'react'
import Heading from './components/Heading'
import Form from './components/Form'
import Status from './components/Status'
import ListGroup from './components/ListGroup'
import Counter from './components/Counter'
import Input from './components/Input'
import Check from './components/Check'
import Accordion from './components/Accordion'

const App = () => {

  const questions = [
    {id:1,
      question: "This is question",
      answer:"answer : lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore, perspiciatis earum nam quasi assumenda ullam quae ipsa dicta, non aut quo autem! Error rerum corporis enim nesciunt ipsum vitae.",
    },
    {id:2,
      question: "This is question",
      answer:"answer : lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore, perspiciatis earum nam quasi assumenda ullam quae ipsa dicta, non aut quo autem! Error rerum corporis enim nesciunt ipsum vitae.",
    },
    {id:3,
      question: "This is question",
      answer:"answer : lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore, perspiciatis earum nam quasi assumenda ullam quae ipsa dicta, non aut quo autem! Error rerum corporis enim nesciunt ipsum vitae.",
    },
  ];



  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-10 border w-2/3">
        <Heading appTitle="To Do List" />
        {/* <Form /> */}
        {/* <Status /> */}
        {/* <ListGroup /> */}
        {/* <Counter /> */}
        {/* <Input /> */}
        {/* <Check /> */}


        {
          questions.map(({id, question, answer}) => (
            <Accordion key={id} question={question} answer={answer} />
          ))
        }
      </div>
    </div>
  )
}

export default App