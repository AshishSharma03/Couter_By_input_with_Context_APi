import React ,{useContext}from 'react'
import { CounterContext } from '../Store/CouterContext';

function Display() {
    const {count} = useContext(CounterContext);

  console.log(count)
  return (
    <div>{count.map(a => a.count)}</div>
  )
}

export default Display