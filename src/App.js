import React, { useReducer ,useState } from 'react'
import DecButton from './component/DecButton';
import Display from './component/Display';
import IncButton from './component/IncButton';
import { CounterContext } from './Store/CouterContext';
import Reducer, { initialState } from './Store/Store'
import './App.css'
import ResetButton from './component/ResetButton';
import Input from './component/Input';


function App() {
  const [input, setinput] = useState(1);
  const [count , dispatch] = useReducer(Reducer,initialState);
    
   
   return (  
    <CounterContext.Provider value={{count ,dispatch,input,setinput}}>
   <div className="App">
    <div className='CounterBox'>
        <IncButton />
        <Display/>
        <DecButton/>
    </div>
      <Input/>
      <ResetButton/>
   </div>
    </CounterContext.Provider>
  )
}

export default App