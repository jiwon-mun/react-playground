import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import RHF from "./RHF";

function Child({values}) {
  const [state, setState] = useState();
  
  console.log("CUSTOM CHILD")

  useEffect(()=> {
    values.firstName.listener = (v)=> {
      setState(v)
    }
  },[])


  return <p>Watch: {state}</p>;
}


const Custom = () => {
  console.log("Custom")
  const {current: values} = useRef({
    firstName : {
      setValue: function(v) {
        this.value = v
        this.listener(v)
      },
      listener: null,
      value: 0,
    }
  })

  return <div>
  <button onClick={()=>values.firstName.setValue(values.firstName.value + 1)}></button>
  <Child values={values} />
  </div>
}

function App() {
 return <div><Custom /><RHF /></div>
}
export default App