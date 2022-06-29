import { View, FlatList } from "react-native";
import CatItem from "./CatItem";

function CatList({ items }) {
  function renderCatItem(itemData) {
    return <CatItem {...itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderCatItem}
      />
    </View>
  );
}

export default CatList;
