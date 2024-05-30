import './style.css';
import ReactDOM from "react-dom/client";
import React from 'react';


const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

const App = () => {

  const courses = [
    {id:1, title:"Computer Science", student:7},
    {id:2, title:"Computer Technology", student:8},
    {id:3, title:"Network Security", student:5},
    {id:4, title:"Cloud Computing", student:0},
    {id:5, title:"Information Technology", student:20}
  ]

  return React.createElement("div", 
  {
    className:"m-5 p-5 border border-gray-300 max-w-xl mx-auto shadow-lg space-y-2"
  }, 
    React.createElement("h1", {className:"text-2xl font-serif text-blue-600 font-semibold underline mb-3"}, "Academy Courses"),
    React.createElement("ul", {className: "space-y-1 pl-4"}, 
      // React.createElement("li", null, "SWD"),
      // React.createElement("li", null, "SWD"),
  
      courses.filter(({student}) => student > 0).map(({id, title, student}) => 
        React.createElement("li", 
      {
        key:id, 
        className: `font-mono first:bg-green-200 py-1 px-2 border-l-4 border-green-600 hover:bg-gray-200 ${student <= 5 ? 'bg-red-300' : 'bg-green-200'} `}, 
        student,
        "   ",
        title)
      )

    )
  );
};


root.render(App());
