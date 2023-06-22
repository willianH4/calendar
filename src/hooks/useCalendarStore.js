// encargado de las interacciones con el store

import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {

  const dispatch = useDispatch();

    const {
        events, activeEvent
    } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent(calendarEvent) )
    }

    const startSavingEvent = async(calendarEvent) => {
      // llega a backend

      // 200
      if ( calendarEvent._id ) {
        // actualiza
        dispatch( onUpdateEvent( {...calendarEvent} ) );
      } else {
        dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
      }
    }

  return {
    // propiedades
    events,
    activeEvent,

    // metodos
    setActiveEvent,
    startSavingEvent
  };
}
