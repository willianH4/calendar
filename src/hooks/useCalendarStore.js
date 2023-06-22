// encargado de las interacciones con el store

import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

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

    const startDeleteEvent = () => {
      // TODO: Llegar al backend
      dispatch( onDeleteEvent() )
    }

  return {
    // propiedades
    events,
    activeEvent,
    hasEventSelected : !!activeEvent,

    // metodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent
  };
}
