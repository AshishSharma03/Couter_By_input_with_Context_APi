import React ,{useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';
import { ACTION } from '../Store/Store';


function ResetButton() {
    const {dispatch,setinput} = useContext(CounterContext)
    const onReset =()=>{
        dispatch({type: ACTION.RESET,})
        setinput(1)
    }

  return (
    <button onClick={onReset}>Reset</button>
  )
}

export default ResetButton