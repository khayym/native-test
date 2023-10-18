/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [arrayInputValue, setArrayInputValue] = useState([]);
  const [boolMeaning, setBoolMeaning] = useState(false);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const addTodo = () => {
    if (inputValue !== "") {
      setBoolMeaning(true);
      setArrayInputValue([...arrayInputValue, inputValue]);
      console.log(arrayInputValue);
      setInputValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="red" />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.containerTodoApp}>
          <View style={styles.todoAppContect}>
            <Text style={styles.todoAppText}>Todo App</Text>
            <View style={styles.addContainer}>
              <TextInput
                style={styles.inputAdd}
                placeholderTextColor={"white"}
                color={"white"}
                placeholder="Add your text"
                value={inputValue}
                onChangeText={handleInputChange}
              />
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.btnAdd}
                  color={"white"}
                  title="Add"
                  onPress={addTodo}
                >
                  <Text style={styles.textAdd}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* !Delete Container */}
            {boolMeaning ? (
              <View style={styles.mainContainer}>
                {arrayInputValue.map((element, index) => {
                  return (
                    // <React.Fragment key={index}>
                    <View key={index} style={styles.deleContainer}>
                      <View style={styles.todosTextContainer}>
                        <Text style={styles.todosText}>
                          {`${index + 1} ) ${element}`}
                        </Text>
                      </View>
                      <View style={styles.btnContainerDelete}>
                        <TouchableOpacity style={styles.btnDelete}>
                          <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    // </React.Fragment>s
                  );
                })}
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
