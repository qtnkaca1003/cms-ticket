import {ActionType} from "./ActionType"


interface setTicket{
    type: ActionType.SET_TICKET,
    payload: any
}

export type Action  = setTicket /* |selectedProduct|removeSelectedProduct */