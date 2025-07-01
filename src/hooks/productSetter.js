import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addAllProducts,
  updatePagination,
  setCategory,
} from "../store/slices/productSlice";
import { getProducts } from "../services/products";
import dummy from "../assets/dummy.json";
export default function useProductSetter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const data = await getProducts();
        console.log(dummy);
        const data = dummy;
        dispatch(addAllProducts(data));
        dispatch(updatePagination());
        let map = new Map();
        for (let product of data) {
          const count = map.get(product.category) || 0;
          map.set(product.category, count + 1);
        }
        let categories = Array.from(map.entries());
        console.log("category", categories);
        dispatch(setCategory(categories));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);
}
