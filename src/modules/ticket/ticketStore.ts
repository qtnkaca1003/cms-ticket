import {createAction,createSlice,PayloadAction,Selector} from '@reduxjs/toolkit';

interface ITicket {
        bookingcode: string
        checkin: string
        id: number
        codeTicket: string
        date: string
        usage:string
        releaseDate: string
}

const ticketStore = createSlice({
    name: 'ticketStore',
    initialState: {
        bookingcode: "string",
        checkin: "",
        id: 1,
        codeTicket: "string",
        date: "number",
        usage:"string",
        releaseDate: "string"
    } as unknown as ITicket,
    reducers: {
      fetchProfile: (
        state,
        action: PayloadAction,
      ) =>
        Object.assign(state, {
         
        })
     
    }
      
    
  });
  export default ticketStore;