import React, { useState } from 'react';
import Accordion from "./Accordion";

const AccordionGroup = () => {

    const [faq, setFaq] = useState(
        [
            {
                id:1,
                question: "What are JavaScript arrays?",
                answer: "JavaScript arrays are ordered collections of items. These items can be of any data type, like strings, numbers, or even other arrays.",
                isOpen:false,
            },
            {
                id:2,
                question: "How do I create an array?",
                answer: "You can create an array using square brackets `[]` and specifying the elements separated by commas. For example: `const myArray = [1, 'hello', true];`",
                isOpen:false,
            },
            {
                id:3,
                question: "How can I access elements in an array?",
                answer: "You can access elements in an array using their index, which starts from 0. The first element has an index of 0, the second element has an index of 1, and so on. For example: `myArray[1]` would access the element 'hello' in the above array.",
                isOpen:false,
            }
          ]
    );

   const openAccordion = (id) => {
    setFaq(
        faq.map((el) => el.id === id ? {...el, isOpen:true} : {...el, isOpen:false})
    );
   };

  return (
    <div className="">
        <p className="text-3xl font-bold text-green-400 underline mb-4">FAQs</p>
        {faq.map(({id, question, answer, isOpen}) => (
        <Accordion 
            key={id} 
            id={id}
            openAccordion={openAccordion}
            question={question} 
            answer={answer} 
            isOpen={isOpen}
        />
    ))}
    </div>
  )
}

export default AccordionGroup