import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test'
import Sum from './Sum'
import React ,{ useState,useEffect,useRef } from 'react'

function App() {

  const [count,setcount]=useState(0)
  const [color,setcolor]=useState('red')
  const focusinput=useRef(null)

 useEffect(()=>{
  console.log({count})
  return ()=>{
    console.log(`clean up ${count}`)
  }
 },[count])



const colorchange=()=>{
  setcolor(color==='red'?'green':'red')
}


  const handChange=(e)=>{
    const value=Number(e.target.value)
    if(!isNaN(value)){
      setcount(value)
    }
  }
  const showalert=()=>{
    alert('button clicked Wow')
  }
  return (
    <>
    <h1>counter</h1>
    <p>{count}</p>
    <button onClick={()=>setcount(count+1)}>increment</button>
    <button onClick={()=>setcount(count-1)}>decrement</button>
    <button onClick={()=>setcount(0)}>reset</button>
    <br />
    <input type="number" value={count} onChange={handChange} placeholder='set count' />
    <br />

    <input type="text" placeholder="focusinput" ref={focusinput} />
    <button onClick={()=>focusinput.current.focus()} >focus input</button>
    <br />
    <button onClick={showalert}>alert</button>
    <br />
    <button onClick={colorchange}>colorchanges</button>
    <input style={{ background: color }} type="text" placeholder="Dynamic Color Input" />
    <Test name="shahid"/>

    <Sum/>


   



    </>
  )
}
export default App
