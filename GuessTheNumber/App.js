import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  /* useFonts({  // To make this work Download the fonts and place in the assets folder
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf)
  'open-sans-bold': require('./assets/fonts/OpenSans-Regular-Bold.ttf)
 }) */

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.secondaryColour]}
      style={styles.backround}
    >
      <ImageBackground
        source={require("./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
        resizeMode="cover"
        style={styles.backround}
        imageStyle={styles.backroundImage}
      >
        <SafeAreaView style={styles.backround}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backround: {
    flex: 1,
  },
  backroundImage: {
    opacity: 0.4,
  },
});
