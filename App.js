import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const [gameNumber, setGameNumber] = useState();
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.25 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {gameNumber ? (
            <GameScreen />
          ) : (
            <StartGameScreen setGnumber={setGameNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "pink",
    flex: 1,
  },
});
