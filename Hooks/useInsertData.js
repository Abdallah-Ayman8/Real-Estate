import { postData } from "@/Redux/slices/RealEstate/thunk";
import { useDispatch } from "react-redux";

export default function useInsertData() {
  const dispatch = useDispatch();

  function insertData(url, data) {
    return dispatch(postData({ url, data })).unwrap();
  }

  return { insertData };
}
