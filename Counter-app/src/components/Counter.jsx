import {useState} from 'react'
import {setMessage} from 'react'




function Counter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  return (
    <>
    <div> Counter App </div>
    <div> Count: {count}</div>
    <div> {message} </div>
    <button onClick={() => {setCount((count) => count + 1); setMessage("")}}> Increase.</button>
    <button onClick={() => {setCount((count) => count + 5); setMessage("")}}> Increase by 5.</button>
    <button onClick={() => {setCount((count) => count - 1); setMessage("")}}> Decrease.</button>
    <button onClick={() => {setCount(0); setMessage("Counter has been reset!")}}> Reset.</button>
    </>

  )
}

export default Counter