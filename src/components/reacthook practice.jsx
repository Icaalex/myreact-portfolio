import React from 'react'
import { useState } from 'react';

const reacthook  = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => setCount(count + 1)
    const handleCountn = () => setCount(count - 1)

  return (
    <div className="reacthook"> value:{count}</div>
    <button className="btn" onClick={handleCount}> increment</button>
    <button className="btn" onClick={handleCountn}> decrement</button>

  )
}

export default reacthook 