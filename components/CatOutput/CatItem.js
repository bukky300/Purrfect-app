import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";

function CatItem({ id, name, imageUrl }) {
  const favoritesCtx = useContext(FavoritesContext);

  const catIsFavorite = favoritesCtx.ids.includes(id);

  function changeFavoriteStatusHandler() {
    if (catIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite(id);
    }
  }
  return (
    <Pressable
      onPress={changeFavoriteStatusHandler}
      android_ripple={{ color: "#ccc" }}
    >
      <View style={styles.CatItem}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            {imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
              <Text>No image </Text>
            )}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name={catIsFavorite ? "cards-heart" : "cards-heart-outline"}
          color={catIsFavorite ? "red" : "gray"}
          size={18}
        />
      </View>
    </Pressable>
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
