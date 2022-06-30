import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CatList from "../components/CatOutput/CatList";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import { CatsContext } from "../store/cats-context";
import { fetchCats } from "../util/http";
import { FavoritesContext } from "../store/favorites-context";

function AllPets() {
  const [error, setError] = useState();
  const catsCtx = useContext(CatsContext);
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    async function getCats() {
      try {
        const catItems = await fetchCats();
        catsCtx.setCatItems(catItems);
      } catch (error) {
        setError("Something went wrong!");
      }
    }
    getCats();
  }, []);

  useEffect(() => {
    async function fetchCachedfavorites() {
      const storedFavIds = await AsyncStorage.getItem("favorites");
      if (storedFavIds) {
        const storedFavIdsArr = storedFavIds.split(",");
        favoritesCtx.setFavorites(storedFavIdsArr);
      }
    }
    fetchCachedfavorites();
  }, []);

  if (error) {
    return <ErrorOverlay message={error} />;
  }

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
