import { useContext } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FavoritesContext } from "../../store/favorites-context";

function FavouritesGridTile({ id, name, imageUrl }) {
  const favoritesCtx = useContext(FavoritesContext);

  const catIsFavorite = favoritesCtx.ids.includes(id);

  function changeFavoriteStatusHandler() {
    if (catIsFavorite) {
      favoritesCtx.removeFavorite(id);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={changeFavoriteStatusHandler}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>{name}</Text>
          <MaterialCommunityIcons name="cards-heart" color="red" size={18} />
        </View>
      </Pressable>
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
    paddingTop: 10,
  },
  text: {
    fontFamily: "Inter_400Regular",
  },
});
