import { forwardRef } from "react"
import { useState } from "react"

const Counter = ({}, ref)=> {
    console.log("Counter")
    const [count, setCount] = useState(0)
    ref.current = setCount
    return <div >count is {count}</div>
}

export default forwardRef(Counter)