import { deleteData } from "@/Redux/slices/RealEstate/thunk";
import { useDispatch } from "react-redux";

export default function useDeleteData() {
  const dispatch = useDispatch();

  function insertDelete(url, id) {
    return dispatch(deleteData(url, id));
  }

  return { insertDelete };
}
