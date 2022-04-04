const initialState = {
  itinerariesData: [],
  auxiliar: [],
  activities: [],
};

const itinerarysReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_itineraries_by_id":
      return {
        ...state,
        itinerariesData: action.payload,
        auxiliar: [],
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};
export default itinerarysReducer;
