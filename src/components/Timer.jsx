import { useState, useEffect } from 'react'

let timer

function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => clearInterval(timer)}>Stop</button>
      </div>
    </>
  )
}

export default Timer
