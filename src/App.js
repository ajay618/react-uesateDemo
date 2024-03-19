import { useState } from "react"

function App() {
  const [Name , setName ] = useState("")
  const [flag , setFlag] = useState(false)
  const [steps , setSteps] = useState(() => {
  console.log("clicked")
  return 0})
  const [names , setNames] = useState([])
  const ChangeName = () => {
    console.log("Clicked!!");
    setFlag(true)
    Name ==="Ajay" ? setName("Rose") : setName("Ajay")
    }

  const increment = ()=>{
    setSteps((prevState) => prevState +1 )
    setSteps((prevState) => prevState +1 )
  }
  const decrement = ()=>{
    steps===0 ? setSteps(steps) : setSteps(steps-1)
  }

  function addNames (e){
    e.preventDefault();
    setNames([...names, Name])
    console.log(names);
    setName(" ")
  }

  return (
    <div className="App">
      <h1>Hello, {flag ? Name : ""}</h1>
      <button onClick={ChangeName} style={{cursor:"pointer"}}>Click me!</button>
      <hr /><br />
      <button onClick={increment}>+</button><br />
      <div>{steps}</div>
      <button onClick={decrement}>-</button>

      <hr />
      <form onSubmit={addNames}>
      <input type="text" name="test" id="" value={Name} placeholder="Add names" onChange={(e) => { setName(e.target.value)}}/>
      <button>Submit!</button>
      </form>
      <hr />
      <ul>
        {names.map ( (item,index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
