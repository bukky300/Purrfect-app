import { StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FavouritesGridTile({ name, imageUrl }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>{name}</Text>
        <MaterialCommunityIcons name="cards-heart" color="red" size={18} />
      </View>
    </View>
  );
}

export default FavouritesGridTile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 4,
    width: "50%",
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 150,
    width: "100%",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  text: {
    fontFamily: "Inter_400Regular",
  },
});
