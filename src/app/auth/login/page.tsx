"use client";

import { Button } from "@/components/button";
import Input from "@/components/input/component/Input";
import { Typography } from "@/components/typography";
import { getLocalStorage, setLocalStorage } from "@/lib/local-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "./services/login.service";
import { loginSchema, LoginSchemaType } from "./utils/login.schema";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { isPending, mutate: HandleLogin } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: LoginSchemaType) => {
    if (rememberMe) {
      setLocalStorage("identity", values.email);
    }

    HandleLogin(values);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const savedEmail = getLocalStorage<string>("identity");

    if (savedEmail) {
      setValue("email", savedEmail);
    }
  }, [setValue]);

  return (
    <main className="h-[100vh] w-full flex items-center justify-center p-0 md:p-4 sm:p-6 lg:p-8">
      <section className="w-full h-full bg-primary-blue rounded-[50px] flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-[20px] p-9">
            <div className="mb-[42px]">
              <Typography size="TITLE_XL" className="text-primary-blue">
                Selamat Datang Kembali
              </Typography>
              <Typography size="BODY_MD_NORMAL" className="text-gray-600">
                Belum punya akun?{" "}
                <Link href="/auth/register">
                  <Typography
                    size="LABEL_SM_BOLDEST"
                    className="text-primary-blue hover:text-secondary-blue"
                  >
                    Daftar
                  </Typography>
                </Link>
              </Typography>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-4">
              {/* Email / Identity Input */}
              <Input
                label="Email"
                placeholder="Masukkan email atau username anda"
                fullWidth
                {...register("email")}
                error={errors.email?.message}
              />

              {/* Password Input */}
              <div className="relative">
                <Input
                  label="Kata Sandi"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi anda"
                  fullWidth
                  {...register("password")}
                  error={errors.password?.message}
                />
                <button
                  type="button"
                  className="absolute right-3 top-[42px] cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
                  aria-label={
                    showPassword
                      ? "Sembunyikan kata sandi"
                      : "Tampilkan kata sandi"
                  }
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded cursor-pointer border-gray-300 text-primary-blue focus:ring-[#0C6DFD]"
                  />
                  <Typography
                    size="LABEL_SM_NORMAL"
                    className="ml-2"
                    htmlFor="remember-me"
                  >
                    Ingat saya
                  </Typography>
                </div>
                <Link href="/auth/forgot-password">
                  <Typography
                    size="LABEL_SM_BOLDEST"
                    className="text-primary-blue hover:text-secondary-blue"
                  >
                    Lupa Password?
                  </Typography>
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                className="cursor-pointer"
                type="submit"
                size="medium"
                fullWidth
                disabled={isPending || isSubmitting}
              >
                {isPending || isSubmitting ? "Memproses..." : "Masuk"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
