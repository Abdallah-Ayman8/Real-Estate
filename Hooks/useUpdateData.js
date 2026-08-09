import { updateData } from "@/Redux/slices/RealEstate/thunk";
import { useDispatch } from "react-redux";

export default function useUpdateData() {
  const dispatch = useDispatch();

  function insertUpdate(url, data) {
    return dispatch(updateData({ url, data }));
  }

  return { insertUpdate };
}
