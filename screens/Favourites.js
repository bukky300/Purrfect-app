import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { CatsContext } from "../store/cats-context";
import FavouritesGridTile from "../components/favouritesOutput/FavouritesGridTile";

function Favourites() {
  const catsCtx = useContext(CatsContext);
  const items = catsCtx.catItems.slice(0, 20);
  function renderCategoryItem(itemData) {
    return (
      <FavouritesGridTile
        name={itemData.item.name}
        imageUrl={itemData.item.imageUrl}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
    backgroundColor: "#fff",
  },
});
