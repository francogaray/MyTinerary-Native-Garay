const initialState = {
  citiesData: [],
  filterCitiesData: [],
  auxiliar: [],
  guardarCiudadPorID: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_all_cities": //ok
      return {
        ...state,
        citiesData: action.payload,
        filterCitiesData: action.payload,
        auxiliar: action.payload,
        guardarCiudadPorID: action.payload,
      };
    case "get_cities_id":
      return {
        ...state,
        guardarCiudadPorID: action.payload,
      };
    case "get_one_city":
      let oneCity = state.citiesData.find(
        (ciudad) => ciudad._id === action.payload
      );
      return {
        ...state,
        guardarCiudadPorID: oneCity,
      };
    case "add_city":
      return {
        ...state,
        citiesData: [...state.citiesData, action.payload],
      };
    case "remove_city":
      return {
        ...state,
        citiesData: state.citiesData.filter(
          (city) => city._id !== action.payload
        ),
      };
    case "modify_city":
      const newCities = state.citiesData.map((city) => {
        if (city._id === action.payload._id) {
          return action.payload;
        }
        return city;
      });
      return {
        ...state,
        citiesData: newCities,
      };
    case "filterCities": //ok
      const filtered = action.payload.citiesData.filter((data) =>
        data.ciudad
          .toString()
          .trim()
          .toLowerCase()
          .startsWith(action.payload.value.trim().toLowerCase())
      );

      return {
        ...state,
        filterCitiesData: filtered,
      };
    default:
      return state;
  }
};
export default citiesReducer;