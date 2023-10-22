import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    /* 
    <Pressable onPress={pressHandler()} android_ripple={{color:'#640233'}}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>

    >  Ripple Effect was available in the Android Only
    The Above code have problem with the ripple effect - The effect was showing outside the button elements 
    This is some issue we see we the componets - the solution is to rearrange the component
     */

    /* A custom effect can be made that can be used for both android and ios */

    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler()}
        style={styles.buttonInnerContainer}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
