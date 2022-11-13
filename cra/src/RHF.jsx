import React from "react";
import { useForm, useWatch } from "react-hook-form";

function Child({ control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });
  console.log("RHF CHILD")


  return <p>Watch: {firstName}</p>;
}

function RHF() {
  const { control, setValue, getValues } = useForm({
    firstName: 0
  });


  console.log("RHF ROOT")
  
  return (
    <div>
      <input type="button" onClick={()=> {
        const [firstName] = getValues(['firstName'])
        setValue('firstName', firstName + 1 || 0)
      }} />
      <Child control={control} />
    </div>
  );
}
export default RHF