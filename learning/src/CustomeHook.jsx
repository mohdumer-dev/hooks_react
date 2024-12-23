import React, { useEffect, useRef, useState } from 'react'
import './index.css'

const CustomeHook = () => {
    {/* usefetch */}
    //     const[currentpost,setCurrentpost]=useState(1)
    //    const {loading,post} =useFetch(`https://jsonplaceholder.typicode.com/todos/${currentpost}`)

    //    if(loading){
    //     return <Loading/>
    //    }
    // const [number, setnumber] = useState(0)
    // const prev = usePrev(number)
    // console.log(number)
    return <>
    {/* usefetch */}
        {/* <button onClick={()=>{ setCurrentpost(1)}}>1</button>
 <button onClick={()=>{ setCurrentpost(2)}}>2</button>
 <button onClick={()=>{ setCurrentpost(3)}}>3</button>
 <br/>
 <br/>
 {JSON.stringify(post)} */}
{/* use prev */}
        {/* <button onClick={() => { setnumber(number + 1) }}>Click Me</button>
        <br />
        {number}
        <br />
        <span>The previous number is {prev}</span> */}

        {/* //use Debounce */}

    </>
}

function usePrev(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

const Loading = () => {
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
            <p style={styles.text}>Loading...</p>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    spinner: {
        width: '40px',
        height: '40px',
        border: '4px solid #ccc',
        borderTop: '4px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
    text: {
        marginTop: '10px',
        fontSize: '18px',
        color: '#555',
    },
};


function useFetch(url) {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    async function getdata() {
        setLoading(true)
        const response = await fetch(url)
        const value = await response.json()
        setPost(value)
        setLoading(false)
    }

    useEffect(() => {
        getdata()
    }, [url])

    useEffect(() => {
        const interval = setInterval(getdata, 5 * 1000)
        return function () {
            clearInterval(interval)
        }
    }, [])

    return {
        loading,
        post
    }
}

function usePost() {
    const [post, setPost] = useState({})

    async function getdata(params) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const value = await response.json()
        setPost(value)
        console.log('backend completed')
    }

    useEffect(() => {
        getdata()
    }, [])

    return post
}


export default CustomeHook


function useCount(value) {
    const [count, setcount] = useState(value)
    function increase() {
        setcount(count + 1)
    }
    return [
        count,
        increase
    ]
}

function Hook() {

    const [count, increase] = useCount(10)
    return (
        <>
            <button onClick={increase}>Increase {count}</button>

        </>
    )
}