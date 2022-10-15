import React ,{useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';
import { ACTION } from '../Store/Store';


function IncButton() {
  const {dispatch} = useContext(CounterContext)
  const onInc =()=>{
          dispatch({type: ACTION.INC,})
  }

return (
  <button onClick={onInc}>+</button>
)
}

export default IncButton