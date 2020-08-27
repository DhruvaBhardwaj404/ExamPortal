import {SET_USER} from './userSetType';


const initial_state={
    logged:false,
    data:{},
}

 const userSetReducer= (state=initial_state,action)=>{
    switch(action.type){
        case SET_USER:{ 
                        return{
                            logged:action.payload.logged,
                            data:action.payload.data, 
                        }}
                         
        default : return state
    }
}

export default userSetReducer;