import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch, getState) => {
      const response = await axios.get(`https://mytinerary-garay.herokuapp.com/api/allcities/`);
      dispatch({
        type: "get_all_cities",
        payload: response.data.response.ciudades
      });
    };
  },

  getOneCity: (id) => {
    return async (dispatch, getState) =>{
      const res = await axios.get(`https://mytinerary-garay.herokuapp.com/api/allcities/cities/${id}`);
      return res.data.response
    }
  },


  getCitiesPorId: (id) => {
    return async (dispatch, getState) => {
      const response = await axios.get(`https://mytinerary-garay.herokuapp.com/api/allcities/${id}`);
      console.log(response);
      dispatch({
        type: "get_cities_id",
        payload: response.data.response
      });
    };
  },

  addCity: (ciudad, pais, descripcion, img) => {
    return async (dispatch, getState) => {
      const response = await axios.post(`https://mytinerary-garay.herokuapp.com/api/allcities`, {
        ciudad,
        pais,
        descripcion,
        img,
      });
      dispatch({ type: "add_city", payload: response.data.response.ciudades });
    };
  },

  removeCity: (id) => {
    return async (dispatch, getState) => {
      const response = await axios.delete(`https://mytinerary-garay.herokuapp.com/api/${id}`);
      dispatch({
        type: "remove_city",
        payload: response.data.response.ciudades,
      });
    };
  },

  modifyCity: (id, ciudad, pais, descripcion, img) => {
    return async (dispatch, getState) => {
      const response = await axios.put(`https://mytinerary-garay.herokuapp.com/api/${id}`, {
        ciudad,
        pais,
        descripcion,
        img,
      });
      dispatch({
        type: "modify_city",
        payload: response.data.response.ciudades,
      });
    };
  },
  filterCities: (citiesData, value) => {
    return (dispatch, getState) => {
      dispatch({ type: "filterCities", payload: { citiesData, value } });
    };
  },
};

export default citiesActions;