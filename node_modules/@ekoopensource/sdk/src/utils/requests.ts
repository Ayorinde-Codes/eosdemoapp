import axios, { AxiosRequestConfig, Method } from "axios";
import { Options } from "./DataSchema";
import noResponseError from "./error";
const request = async (method: string, path: string, options: Options) => {
  const requestOptions: AxiosRequestConfig = {
    headers: options.headers,
    baseURL: options.url,
    timeout: options.timeout,
    method: method as Method,
    url: path,
    data: options.data
  };
  return axios(requestOptions)
    .then(response => response.data)
    .catch(err => errorHanding(err));
};

function errorHanding(err: any) {
  if (err.response !== null && err.response !== undefined && err.response.data !== null) {
    return err.response.data;
  }
  const errorMessages = [];
  errorMessages.push(noResponseError(err));

  return { errors: errorMessages };
}

export default request;
