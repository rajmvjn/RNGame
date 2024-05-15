import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ setGnumber }) {
  const [num, setNum] = useState("");

  function resetHandler() {
    setNum("");
  }

  function confirmHandler() {
    const gNum = parseInt(num);
    if (isNaN(gNum) || gNum <= 0 || gNum > 99) {
      Alert.alert("Invalid Number", "Enter number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setGnumber(gNum);
  }

  return (
    <View style={styles.inputCntr}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={num}
        onChangeText={(eT) => setNum(eT)}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.bCntr}>
          <PrimaryButton styles={styles} onPress={resetHandler}>
            Reset
          </PrimaryButton>
        </View>

        <View style={styles.bCntr}>
          <PrimaryButton styles={styles} onPress={confirmHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputCntr: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    alignItems: "center",
  },
  btn: {
    color: "white",
  },
  numberInput: {
    marginVertical: 8,
    height: 50,
    width: 50,
    fontSize: 30,
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
  bCntr: {
    flex: 1,
  },
});

export default StartGameScreen;
