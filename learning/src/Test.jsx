import React from 'react'
import { useRef, useState } from 'react'

const Test = () => {




    const [count, setCount] = useState(0)
    const inputevalue = useRef()

    const [timer, setTimer] = useState(0)
    const stoper = useRef(0)
    function start() {
        let timer = setInterval(() => {
            setTimer(c => c + 1)
        }, 1000)
        stoper.current = timer
    }
    function stop() {
        clearInterval(stoper.current)
        console.log(stoper.current)
    }
    return (
        <>
            {/* Signup
      <input ref={inputevalue} type='text'/>
      <input type="text" />
      <button onClick={()=>{inputevalue.current.focus()}}>Submit</button> */}
            {timer}
            <br />
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    )
}





export default Test