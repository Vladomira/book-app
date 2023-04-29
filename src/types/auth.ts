export type UserData = {
   id: string | null;
   name: null | string;
   email: null | string;
   password: string | undefined;
};
export interface AuthState {
   user: UserData;
   token: null | string;
   isLoggedIn: false;
   isFetchingCurrentUser: false;
}

export const initialState: AuthState = {
   user: { id: "", email: "", name: null, password: "" },
   token: null,
   isLoggedIn: false,
   isFetchingCurrentUser: false,
};
