import { instanceApi } from "./instance";
import store from "@/store";
// import { AxiosResponse } from "axios";

export const getAllUsers = async () => {
  const responseUsers = await instanceApi.get("/users");

  store.commit("setAllUsers", responseUsers.data.users);
};
