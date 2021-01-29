import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const course = 'Half stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return(
    <div>
      <h1>{course} </h1>
      <ul>
        {
          parts.map(val=><li key={val.name}>{val.name } {val.exercises }</li>)
        }
      </ul>
      <p>
        Number of exercices 
          { 
            ' ' + parts.reduce(((acc, curr) => acc + curr.exercises),0)
          } 
      </p>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));

