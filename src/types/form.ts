export type SwitchForm = "Login" | "Signup";

export type AuthSwitcherProps = {
   setSwitchForm: (prop: SwitchForm) => void;
   isAccount: string;
   authButtonText: SwitchForm;
};
