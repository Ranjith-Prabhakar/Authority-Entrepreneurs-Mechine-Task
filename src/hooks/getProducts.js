import { useSelector } from "react-redux";
export function useGetProducts() {
  const products = useSelector((state) => state.products.allProducts);
  return products;
}
