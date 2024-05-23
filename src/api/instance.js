import axios from "axios";

export const actualUrl =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";

const defaultHeaders = {
  accept: "application/json",
};

export const instanceApi = axios.create({
  baseURL: actualUrl,
  headers: defaultHeaders,
});
