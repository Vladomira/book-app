export type SwitchForm = "Log in" | "Sign up";

export type AuthSwitcherProps = {
   setSwitchForm: (prop: SwitchForm) => void;
   isAccount: string;
   authButtonText: SwitchForm;
};
export type FormProps = {
   switcher: SwitchForm;
};
export type FormFieldPattern = {
   required: string;
   minLength: {
      value: number;
      message: string;
   };
};
export interface PasswordVisibilityProps {
   setShowPassword: (prop: boolean) => void;
   showPassword: boolean;
}
