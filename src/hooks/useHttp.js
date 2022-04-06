import axios from "axios";

const useHttp = ({ url, method, body, onSucsses }) => {
  const doRequest = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(body, 'body');

    try {
      global.setIsLoading(true);
      const response = await axios({
        url: "http://localhost:8000" + url,
        method,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: body,

      });

      global.setIsLoading(false);
      onSucsses(response.data);

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
