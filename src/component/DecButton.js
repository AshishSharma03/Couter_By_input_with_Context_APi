import React ,{useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';
import { ACTION } from '../Store/Store';

function DecButton() {
    const {dispatch} = useContext(CounterContext)
    const onDec =()=>{
            dispatch({type: ACTION.DEC,})
    }

  return (
    <button onClick={onDec}>-</button>
  )
}

export default DecButton