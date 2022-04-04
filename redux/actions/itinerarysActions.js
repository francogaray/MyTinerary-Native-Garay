import axios from "axios";

const itinerarysActions = {
  getItineraries: (id) => {
    return async (dispatch, getState) => {
      console.log(id);
      const response = await axios.get(
        `https://mytinerary-garay.herokuapp.com/api/allitineraries/cities/${id}`
      );
      console.log(response.data.response);
      dispatch({
        type: "get_itineraries_by_id",
        payload: response.data.response.itinerarys,
      });
    };
  },
  getActivities: (itineraryId) => {
    console.log("Soy el action");
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(
          `https://mytinerary-garay.herokuapp.com/api/itinerary/activity/${itineraryId}`
        );
        if (res.data.success) {
          dispatch({ type: "GET_ACTIVITIES", payload: res.data.response });
          return { success: true, error: null };
        } else {
          throw new Error(res.data.error);
        }
      } catch (e) {
        return { success: false, error: e.message };
      }
    };
  },
  getAllActivities: (itineraryId) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(
          `https://mytinerary-garay.herokuapp.com/api/itinerary/activity`
        );
        dispatch({ type: "GET_ACTIVITIES", payload: res.data.response });
      } catch (e) {
        return { success: false, error: e.message };
      }
    };
  },
  likeDislike: (placeId) => {
    const token = localStorage.getItem("token");
    return async () => {
      try {
        let response = await axios.put(
          `https://mytinerary-garay.herokuapp.com/api/itinerary/like/${placeId}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
  },
  getOneItinerary: (id) => {
    console.log(id);
    return async (dispatch, getState) => {
      const res = await axios.get(
        `https://mytinerary-garay.herokuapp.com/api/allitineraries/cities/${id}`
      );
      console.log(res.data.response.length);
      dispatch({
        type: "get_itineraries_by_id",
        payload: res.data.response.itinerarys,
      });
    };
  },
};

export default itinerarysActions;
