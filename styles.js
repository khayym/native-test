/** @format */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4682b4",
    flex: 1,
  },

  scrollViewContent: {
    flexGrow: 1, // Занимать всю доступную высоту ScrollView
  },

  containerTodoApp: {
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderColor: "white",
    flex: 1,
  },

  todoAppContect: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  todoAppText: {
    // backgroundColor: "red",
    textAlign: "center",
    height: "15%",
    // width: "80%",
    marginTop: 20,
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },

  addContainer: {
    // backgroundColor: "red",
    // width: "97%",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderColor: "white",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  inputAdd: {
    // backgroundColor: "green",
    width: "80%",
    height: "100%",
    padding: 10,
    placeholderTextColor: "red",
    borderRightWidth: 1,
    borderRightColor: "white",
  },

  btnAdd: {
    // backgroundColor: "red",
    alignItems: "center",
  },

  textAdd: {
    color: "white",
  },

  btnContainer: {
    // backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
  },
  mainContainer: {
    // backgroundColor: "yellow",
    height: "15%",
    flexDirection: "column",
  },

  deleContainer: {
    // backgroundColor: "red",
    width: "97%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    marginBottom: 20,
  },

  btnDelete: {
    // backgroundColor: "red",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  deleteText: {
    color: "white",
  },

  todosTextContainer: {
    // backgroundColor: "yellow",
    height: "100%",
    width: "80%",
    borderRightWidth: 1,
    borderRightColor: "white",
    justifyContent: "center",
    paddingLeft: 10,
  },

  todosText: {
    color: "white",
  },

  btnContainerDelete: {
    // backgroundColor: "red",
    width: "20%",
    justifyContent: "center",
  },
});

export { styles };
