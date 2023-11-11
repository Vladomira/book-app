export type SwitchForm = "Log in" | "Sign up";

export type AuthSwitcherProps = {
   setSwitchForm: (prop: SwitchForm) => void;
   isAccount: string;
   authButtonText: SwitchForm;
};
export type FormProps = {
   switcher: SwitchForm;
};
