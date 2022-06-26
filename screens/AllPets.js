import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import CatList from "../components/CatOutput/CatList";
import { CatsContext } from "../store/cats-context";
import { FavoritesContext } from "../store/favorites-context";
import { fetchCats } from "../util/http";

function AllPets() {
  const catsCtx = useContext(CatsContext);
  const favouritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    async function getCats() {
      const catItems = await fetchCats();
      catsCtx.setCatItems(catItems);
    }
    getCats();
  }, []);

  return (
    <View style={styles.container}>
      <CatList items={catsCtx.catItems} />
    </View>
  );
}

export default AllPets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
  },
});
