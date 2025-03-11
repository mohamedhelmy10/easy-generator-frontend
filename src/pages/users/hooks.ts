import { signIn, signUp, getCurrentProfile, ISignInRequest, ISignUpRequest, ISignInResponse, ISignUpResponse, IUserResponse } from '../../network/users';

export const useSignIn = () => {
  const execute = async (requestData: ISignInRequest): Promise<ISignInResponse> => {
    return signIn(requestData);
  };

  return { execute };
};

export const useSignUp = () => {
  const execute = async (requestData: ISignUpRequest): Promise<ISignUpResponse> => {
    return signUp(requestData);
  };

  return { execute };
};

export const useUserProfile = () => {
  const execute = async (): Promise<IUserResponse> => {
    return getCurrentProfile();
  };
  return { execute };
};