import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllProducts, updatePagination } from "../store/slices/productSlice";
import { getProducts } from "../services/products";

export default function useProductSetter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        dispatch(addAllProducts(data));
        dispatch(updatePagination());
        dispatch();
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);
}
