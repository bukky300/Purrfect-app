import { useContext } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import { CatsContext } from "../store/cats-context";
import FavouritesGridTile from "../components/favouritesOutput/FavouritesGridTile";
import { FavoritesContext } from "../store/favorites-context";

function Favourites() {
  const catsCtx = useContext(CatsContext);
  const favoritesCtx = useContext(FavoritesContext);

  const favoritesCats = catsCtx.catItems.filter((cat) =>
    favoritesCtx.ids.includes(cat.id)
  );

  function renderCategoryItem(itemData) {
    return <FavouritesGridTile {...itemData.item} />;
  }

  if (favoritesCats.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favourites yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritesCats}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
