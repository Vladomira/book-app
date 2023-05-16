export type UserData = {
   name: string;
   email: string;
   id: string;
};

export type FormData = {
   name: string;
   email: string;
   password: string;
};
export type FormUserData = FormData & { id: string };
export interface AuthState {
   user: UserData;
   token: null | string;
   isLoggedIn: boolean;
   isLoading: boolean;
   isFetchingCurrentUser: boolean;
   error: any;
}

export const initialState: AuthState = {
   user: { email: "", name: "", id: "" },
   token: null,
   isLoading: false,
   isLoggedIn: false,
   isFetchingCurrentUser: false,
   error: "",
};
export const initialUserForm = {
   id: "",
   name: "",
   email: "",
   password: "",
};
