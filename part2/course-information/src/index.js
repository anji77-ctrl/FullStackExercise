import React from 'react';
import ReactDOM from 'react-dom';


const Course = (props)=>{
  
  const Header = () =>{
  return <h2>{props.course.name}</h2>
  } 

  const Content = () =>{
    
    const {parts} = props.course

    return(
      <div>
        {
          parts.map((part)=>
            <p key={part.id}>{part.name} {part.exercises} </p>
          )
        }
      </div>
    )
  }
  
  return(
    <div>
      <Header />
      <Content />
    </div>
  ) 
}

const Total = (props)=> {

  
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const total =((props.course.parts.map(el=>el.exercises)).reduce(reducer))

  return <b>total of {total} exercises</b>
}


const App = () =>{

  const course =[
    {
      name: 'Half Stack application development',
      id: 1,
      parts : [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        },
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts : [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
      ]
    },
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={course[0]} />
      <Total course= {course[0]} />
      <Course course={course[1]} />
      <Total course= {course[1]} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
