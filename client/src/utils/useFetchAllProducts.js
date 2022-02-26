import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { ERROR } from "redux/constants";

export default function useFetchAllProducts() {
  const dispatch = useDispatch();
  let response = useQuery("products", () => axios.get("/product"), {
    onError: (error) => {
      dispatch({ type: ERROR, payload: error?.response?.data?.message });
    },
  });

  return response;
}
