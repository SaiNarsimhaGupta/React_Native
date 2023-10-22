import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.backround}>
      <ImageBackground
        source={require("./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
        resizeMode="cover"
        style={styles.backround} 
        imageStyle={styles.backroundImage}
      >
        <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backround: {
    flex: 1,
  },
  backroundImage: {
    opacity: 0.4
  },
});
