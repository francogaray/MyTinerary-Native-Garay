import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import citiesActions from "../../../redux/actions/citiesActions";

function PlacesCard(props) {
  useEffect(() => {
    props.getCities();
    // eslint-disable-next-line
  }, []);

  function filterApi(event) {
    props.filterCities(props.places, event.nativeEvent.text);
  }

  if (!props.filterCitiesData.length)
    return (
        <View>
          <TextInput
            onChange={filterApi}
            style={{ height: 40 }}
            placeholder="Search your citi"
          >
            <Text> Ops... No cities to show :V  </Text>
          </TextInput>
        </View>

    );
  return (
    <>
      <View>
        <TextInput
          onChange={filterApi}
          style={{ height: 40 }}
          placeholder="Search your city"
        >
          <Text></Text>
        </TextInput>
      </View>
      {props.places && props.filterCitiesData?.map((place, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() =>
            props.navigation.navigate("Place", {
              id: place._id,
            })
          }
        >
          <Image source={{ uri: place.img }} style={styles.image} />
          <Text style={styles.text}>{place.ciudad}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
}
const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities
};

const mapStateToProps = (state) => {
  return {
    places: state.citiesReducer.citiesData,
    filterCitiesData: state.citiesReducer.filterCitiesData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesCard);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    width: "100%",
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    zIndex: 10,
    position: "absolute",
    top: "40%",
  },
});
