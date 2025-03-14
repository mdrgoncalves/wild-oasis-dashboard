import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `Account successfully created. Please verify the new account from the user's emaiul address`
      );
    },
  });

  return {
    signup,
  };
}
