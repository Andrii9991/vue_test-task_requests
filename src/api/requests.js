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
        // photo:
        //   "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg",
      },
      {
        headers: {
          Token: responseToken.data.token,
        },
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getAllPositions = async () => {
  const responsePositions = await instanceApi.get("/positions");

  console.log(responsePositions.data);
  store.commit("setAllPositions", responsePositions.data.positions);
};
