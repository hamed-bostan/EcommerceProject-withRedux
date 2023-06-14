import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await axios.get(url);
  return response.data;
};
