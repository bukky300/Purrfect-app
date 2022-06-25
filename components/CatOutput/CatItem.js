import { View, Image, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CatItem({ name, imageUrl }) {
  return (
    <View style={styles.CatItem}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image
              resizeMode="cover"
              source={{ uri: imageUrl }}
              style={styles.image}
            />
          ) : (
            <Text>No image </Text>
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name="cards-heart-outline"
        color="gray"
        size={18}
      />
    </View>
  );
}

export default CatItem;

const styles = StyleSheet.create({
  CatItem: {
    height: 40,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 40,
    width: 40,
  },
  textContainer: {
    marginLeft: 16,
  },
  text: {
    fontFamily: "Inter_400Regular",
    textAlignVertical: "center",
  },
});
