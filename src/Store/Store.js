
export const ACTION = {
    INC : 'inc',
    DEC : 'dec',
    INP : 'input',
    RESET : 'reset',
}



  
export const initialState = [{count : 0 , Qunatity : 1}]

function Reducer(state,action){
  

        switch(action.type){
              
                case ACTION.INC :

                    state = state.map(a => { return{...a, count: a.count  + a.Qunatity}})
                    return  state
                   
                    
                case  ACTION.DEC :
                    state = state.map(a => { return{...a, count: a.count  - a.Qunatity}})
                    return state 

                case ACTION.INP:
                    state = state.map(a => { return{...a, Qunatity : parseInt(action.payload.num)}})
                    return state 


                case  ACTION.RESET :
                    return initialState

                default :
                    return state ;
        }

}


export default Reducer
