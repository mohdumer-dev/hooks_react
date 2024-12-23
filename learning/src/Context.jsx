import React, { createContext, useContext, useState } from 'react'

const ValueContext=createContext()
function ValueWrapper(props){
  const [value,setValue]=useState(0)
  return <ValueContext.Provider value={{value,setValue}}>
    {props.children}
  </ValueContext.Provider>
}

const Context = () => {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default Context

function Parent(){
  

  return<>
 <ValueWrapper>
  <Increase/>
  <Decrease/>
  <br />
  <Data/>
  </ValueWrapper>
  

  </>
}
function Increase(){
  const{setValue}=useContext(ValueContext)
  return <button  onClick={()=>{setValue(c=>c+1)}}>Increase</button>
}
function Decrease(){
  const{setValue}=useContext(ValueContext)
  return <button  onClick={()=>{setValue(c=>c-1)}}>Decrease</button>
}
function Data(){
  const{value}=useContext(ValueContext)
  return <div>Number{value}</div>
}
