export type UserData = {
   name: string;
   email: string;
   id: string;
};

export type FormData = Pick<UserData, "email" | "name"> & {
   password: string;
   checkPassword: string;
};
export type FormUserData = FormData & { id: string };
export interface AuthState {
   user: UserData;
   token: string;
   isLoggedIn: boolean;
   error: any;
}

export const initialState: AuthState = {
   user: { email: "", name: "", id: "" },
   token: "",
   isLoggedIn: false,
   error: "",
};
export const initialUserForm: FormUserData = {
   id: "",
   name: "",
   email: "",
   password: "",
   checkPassword: "",
};
export type UserState = { auth: AuthState };

export interface AuthResponse {
   user: UserData;
   accessToken: string;
   refreshToken: string;
}
