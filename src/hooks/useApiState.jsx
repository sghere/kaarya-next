import { useSelector } from "react-redux";

const useApiState = (apiName) => {
  const {
    data = null,
    loading = false,
    error = null,
  } = useSelector((state) => state.api[apiName]) || {};
  return { data, loading, error };
};

export default useApiState;
