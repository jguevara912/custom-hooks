import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterApp() {
    const [counter, increment, reset] = useCounter()

  return (
    <div>
        <h1>Clicks: {counter} </h1>
        <button onClick={increment}>
            increment
        </button>
        <button onClick={reset}>
            reset
        </button>
    </div>
  )
}

export default CounterApp