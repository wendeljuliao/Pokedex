import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 30,
    lineHeight: 20
  },
  primaryFilter: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchView: {
    flexDirection: 'row',
    width: 229,
    height: 50,
    backgroundColor: '#E2E2E2',
    fontSize: 14,

    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,


    borderRadius: 50,
  },
  input: {
    
    backgroundColor: '#E2E2E2',
    fontSize: 14,

    textAlign: 'left',

    marginLeft: 6
  },
  secundaryFilter: {
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  


})