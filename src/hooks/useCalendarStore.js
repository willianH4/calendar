// encargado de las interacciones con el store

export const useCalendarStore = () => {

    const {
        events, activeEvent
    } = useSelector( state => state.calendar )

  return {
    // propiedades
    events,
    activeEvent

    // metodos
  };
}
