import axios from "axios";

const baseurl = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  // every request should have base URL!
  baseURL: baseurl,
});

const onSuccess = (response) => {
  // do something if it was successful!
  return response;
};

const onError = (err) => {
  if (err.response.status >= 400 && err.response.status < 500) {
    console.log(err);
  }
  return Promise.reject(err);
};
instance.interceptors.response.use(onSuccess, onError);

export default instance;
