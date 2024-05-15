import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, styles, onPress }) {
  const pressHandler = () => {
    onPress();
  };

  return (
    <View style={stylesIn.bCntr}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => (pressed ? [stylesIn.bInner] : stylesIn.bInner)}
        android_ripple={{ color: "red" }}
      >
        <Text style={[styles.btn, stylesIn.bText]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const stylesIn = StyleSheet.create({
  bCntr: {
    margin: 4,
    borderRadius: 28,
    backgroundColor: "green",
  },
  bInner: {
    padding: 4,
    elevation: 4,
  },
  bText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
