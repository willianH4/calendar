import { createSlice } from "@reduxjs/toolkit";
import { addHours } from 'date-fns'

const tempEvent = [
    {
        title: 'Cumple del jefe',
        notes: 'Hay que comprar el regalo',
        start: new Date(),
        end: addHours( new Date(), 2 ),
        bgColor: '#fafafa',
        user: {
          _id: '123',
          name: 'Willian'
        }
      }
]

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
    }
});

export const { onOpenDateModal, onCloseDateModal } = calendarSlice.actions;