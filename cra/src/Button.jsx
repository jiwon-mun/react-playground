const Button = ({setCount}) => {
    console.log("Button", setCount)

    return <button onClick={() => setCount.current((count) => count + 1)}>
  </button>
}

export default Button