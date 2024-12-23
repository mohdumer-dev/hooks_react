import React, { useState, useContext, createContext } from 'react'


const SomeContext = createContext()


function BulbProvider(props) {
    const [bulbOn, setbulbOn] = useState(false)
    return <SomeContext.Provider value={{ bulbOn: bulbOn, setbulbOn: setbulbOn }}>
        {props.children}
    </SomeContext.Provider>
}

const Test2 = () => {

    return (
        <>
            <BulbProvider>
                <LightBulb />
            </BulbProvider>
            <br />

            <Text> Hello umer ke jayy</Text>
        </>
    )
}

function Text({ children }) {
    return <div style={{ backgroundColor: "red", width: "200px", height: "38px", alignItems: "center" }}>
        <div style={{ color: "green" }}>{children}</div>
    </div>
}


function LightBulb() {
    return <div>
        <BulbOn />
        <Togglebulb />
    </div>
}

function BulbOn() {
    const { bulbOn } = useContext(SomeContext)
    return <div>
        {bulbOn ? "ON" : "OFF"}
    </div>
}
function Togglebulb() {
    const { setbulbOn } = useContext(SomeContext)
    function change() {
        setbulbOn(c => !c)

    }
    return <div>
        <button onClick={change}>Toggle bulb</button>
    </div>
}


export default Test2