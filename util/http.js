import axios from "axios";

export async function fetchCats() {
  const config = {
    headers: {
      "x-api-key": "a3f8814f-4568-47f2-b96d-adf16e75c8e2",
    },
  };
  const response = await axios.get(
    "https://api.thecatapi.com/v1/breeds",
    config
  );

  const items = [];

  response.data.map((item) =>
    items.push({
      id: item.id,
      name: item.name,
      imageUrl: item.image?.url,
    })
  );

  return items;
}
