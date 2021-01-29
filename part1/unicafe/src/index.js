import React, {useState} from 'react';
import ReactDOM from 'react-dom';




const Button = ({handle, name}) =>{
  return(
    <>
      <button onClick={handle}>{name}</button>
    </>
  )
}

const Statistic = ({text, value, percentage}) =>{
  return(
    <>
      {
        value!==0 && (<div>{text} {value}{percentage} </div>) 
      }
    </>
  )
}

const App = () => {

  const [good, setGood] = useState (0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const showFeed = (good!==0 || neutral!==0 || bad!==0) ? 
  (
    <div>
      <Statistic text="average" value={(good-bad)/(good + neutral + bad)} />
      <Statistic text="positive" value={((good * 100)/(good + neutral + bad))} percentage="%" />
    </div>
  ) :
  (
    <h3>
      No feedback given
    </h3>
  ) 
  
  return(
    <div>
      <h1>give feedback</h1>
      <br />
      <Button handle={()=> setGood(good + 1)} name="good" />
      <Button handle={()=> setNeutral(neutral + 1)} name="neutral" />
      <Button handle={()=> setBad(bad + 1)} name="bad" />
      <br />
      <h1>Statistics</h1>
      <br />
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      {showFeed}
      
    </div>
  )
}

ReactDOM.render(<App />,  
  document.getElementById('root')
);

