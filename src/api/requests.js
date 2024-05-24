import { instanceApi } from "./instance";
import store from "@/store";

export const getAllUsers = async () => {
  const responseUsers = await instanceApi.get("/users");

  store.commit("setAllUsers", responseUsers.data.users);
};

export const signUp = async () => {
  try {
    const responseToken = await instanceApi.get("/token");

    const response = await instanceApi.post(
      "/users",
      {
        name: store.state.users.name,
        email: store.state.users.email,
        phone: store.state.users.phone,
        position_id: store.state.users.positionId,
        photo: store.state.users.file,
      },

      {
        headers: {
          Token: responseToken.data.token,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return {
      success: response.data.success,
      message: response.data.message,
    };
  } catch (response) {
    console.error(response);
    const errorKeys = Object.keys(response.response.data.fails);
    const firstErrorKey = errorKeys[0];

    return {
      message: firstErrorKey,
    };
  }
};

export const getAllPositions = async () => {
  const responsePositions = await instanceApi.get("/positions");

  store.commit("setAllPositions", responsePositions.data.positions);
};
