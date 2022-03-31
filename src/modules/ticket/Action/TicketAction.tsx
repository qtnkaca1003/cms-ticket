import {ActionType} from "./ActionType"
import { Dispatch } from "redux"
import {Action} from "./index"

interface ITicket {
    data: [{
        bookingcode: string
        checkin: string
        id: number
        codeTicket: string
        date: number
        usage:string
        releaseDate: string
    }]
}
export const setTicket = (ticket : ITicket)=>{
    return(dispatch : Dispatch<Action>)=>{
        dispatch({
            type: ActionType.SET_TICKET,
            payload: ticket
        })
    }


}