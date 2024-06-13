import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function incrementHandler(){
    setCount(count+1);
  }
  function decrementHandler(){
    setCount(count-1);
  }
  
  function resetHandler(){
    setCount(0);
  }

  return (
    <>
      <div className='container' >
         <div className='inner-container'>
             <button className='buttons' onClick={decrementHandler}><h3 className='btn-text'>-</h3></button>
             <h3 className='text-box' count={count} >{count}</h3>
             <button className='buttons' onClick={incrementHandler}><h3 className='btn-text'>+</h3></button>
         </div>
         <div> <button className='reset-btn' onClick={resetHandler}><h2>Reset</h2></button></div>
      </div>
    </>
  )
}

export default App
