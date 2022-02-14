import axios from "axios";

const useHttp = ({ url, method, body }) => {
  const doRequest = async () => {
    try {
      global.setIsLoading(true);
      const response = await axios[method]("http://localhost:8000" + url, body);
      global.setIsLoading(false);

      return { data: response.data };
    } catch (err) {
      global.setIsLoading(false);

      // global.showAlert(err.response.data.errors);
      global.showAlert([]);

      return { error: true };
    }
  };

  return doRequest;
};

export default useHttp;
