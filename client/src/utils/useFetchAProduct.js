import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { ERROR } from "redux/constants";

const useFetchAProduct = (id) => {
  const dispatch = useDispatch();

  let response = useQuery(
    "editProduct",
    () => axios.get(`/product/fetch?id=${id}`),
    {
      onError: (error) => {
        dispatch({ type: ERROR, payload: error?.response?.data?.message });
      },
    }
  );

  return response;
};

export default useFetchAProduct;
