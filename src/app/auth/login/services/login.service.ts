import api from "@/clients/api";
import { setLocalStorage } from "@/lib/local-storage";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { LoginSchemaType } from "../utils/login.schema";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (payload: LoginSchemaType) => {
      const response = await api.post("/auth/login", {
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    },
    onSuccess: ({ data }) => {
      setLocalStorage("accessToken", data.access_token);
      setLocalStorage("refreshToken", data.refresh_token);
      toast.success("Berhasil login!");
    },
    onError: (error: unknown) => {
      let message = "Terjadi kesalahan saat login";

      if (
        error &&
        typeof error === "object" &&
        (error as AxiosError).isAxiosError
      ) {
        const axiosError = error as AxiosError<any>;
        const code = axiosError.response?.data.errors[0]?.extensions?.code;

        if (code === "INVALID_CREDENTIALS") {
          message = "Email atau kata sandi salah. Silakan coba lagi.";
        } else {
          message =
            axiosError.response?.data?.[0]?.message ||
            axiosError.response?.data?.message ||
            message;
        }
      }

      toast.error(message);
    },
  });
};
