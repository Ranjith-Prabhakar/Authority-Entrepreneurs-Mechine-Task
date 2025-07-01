import { useSelector } from "react-redux";
import { updatePagination } from "../store/slices/productSlice";

export function useSetPagination() {
  const { productsAfterFilterNSort } = useSelector((state) => state.products);

  const paginationHandler = (tabNo) => {
    if (tabNo * 6 < productsAfterFilterNSort.length && currentPage > 1) {
      updatePagination({ tabNo });
    }
  };

  const backwardPage = () => {
    if (currentPage > 1) {
      updatePagination({ operation: "subtract" });
    }
  };
  return [paginationHandler];
}
