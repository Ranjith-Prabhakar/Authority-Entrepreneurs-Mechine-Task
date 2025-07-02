import { updateSort } from "../store/slices/productSlice";
import { useDispatch } from "react-redux";
export function useSetSort() {
  let dispatch = useDispatch();

  function sortHandler(action) {
    dispatch(updateSort(action));
  }
  return sortHandler;
}
