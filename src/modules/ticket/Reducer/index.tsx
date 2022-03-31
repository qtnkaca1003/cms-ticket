import { combineReducers } from "redux"
import ticketReducer  from "./TicketReducer"
 
export const reducer = combineReducers({
    allTicket : ticketReducer
})
export type State = ReturnType <typeof reducer>