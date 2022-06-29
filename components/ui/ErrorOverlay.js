import { View, StyleSheet, Text } from "react-native";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
});
