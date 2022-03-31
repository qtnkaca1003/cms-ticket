import { ActionType } from "../Action/ActionType"
import { Action } from "../Action/index"

const ticketReducer =(state: any=[], action :Action)=>{
    switch(action.type){
        case ActionType.SET_TICKET:
            return(state= action.payload)
        default:{
            return{
                ...state
            }
        }
    }
}
export default ticketReducer