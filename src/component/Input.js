import React ,{useState,useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';
import { ACTION } from '../Store/Store';

function Input() {
  
    const {input,setinput,count,dispatch} = useContext(CounterContext)

    const ChangeOP =()=>{
            dispatch({type: ACTION.INP,payload : {num: input}})
    
    }

    // console.log(count[0].Qunatity)
  return (
    <div>
        <input type="number" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
        <button onClick={ChangeOP}>Chnage ({input}) </button>
    </div>
  )
}

export default Input