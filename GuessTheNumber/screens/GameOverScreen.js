import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summayText}>
        Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds to guess the number{" "}
        <Text style={styles.highLight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summayText:{
    fontSize:24,
    textAlign:'center',
    marginBottom:24,
  },
  highLight:{
    color: Colors.primary500,
    fontWeight:'bold',
    fontSize:30,
  }
});
