import { axiosInstance } from "./index";

export type UserID = number;
export type IUserResponse = {
  id: UserID;
  email: string;
  name: string;
};

export type ISignInResponse = {
  accessToken: string;
};

export type ISignUpResponse = {
  user: IUserResponse;
};

export type ISignInRequest = {
  email: string;
  password: string;
};

export type ISignUpRequest = {
  email: string;
  password: string;
  name: string;
};

export const signIn = async (data: ISignInRequest): Promise<ISignInResponse> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post<ISignInResponse>("/users/signin", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const signUp = async (data: ISignUpRequest): Promise<ISignUpResponse> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post<ISignUpResponse>("/users/signup", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getCurrentProfile = async (): Promise<IUserResponse> => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("accessToken");
    axiosInstance
      .get<IUserResponse>("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};