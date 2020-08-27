import {SET_USER} from './userSetType'


export const userSetAction=(data)=>{
    return {
        type:SET_USER,
        payload:data
    }
}

