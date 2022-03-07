import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 123,
    backgroundColor: "red",
    borderRadius: 8,

    flexDirection: "row",
    padding: 10,
  },
  leftSide: {
    width: "60%",
    height: "100%",

    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  rightSide: {
    width: "40%",
    height: "100%",
    
    justifyContent: "center",
    alignItems: "center",
  },
  numberPokedex: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  namePokemon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 5,
  },
  containerTypes: {
    flexDirection: 'row',
    width: "95%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  pokemonImage: {
    width: 100,
    height: 100,
  }

})