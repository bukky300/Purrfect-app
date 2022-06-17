import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import CatList from "../components/CatOutput/CatList";
import { CatsContext } from "../store/cats-context";
import { fetchCats } from "../util/http";

function AllPets() {
  const catsCtx = useContext(CatsContext);

  useEffect(() => {
    async function getCats() {
      const catItems = await fetchCats();
      catsCtx.setCatItems(catItems);
    }
    getCats();
  }, []);

  const items = catsCtx.catItems.slice(0, 20);

  return (
    <View style={styles.container}>
      <CatList items={items} />
    </View>
  );
}

export default AllPets;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
  },
});
