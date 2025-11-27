import { useState } from "react";
import { useForm } from "react-hook-form";
import { authorizationSchema } from "../../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { Title, UIButton, Input } from "../../components";
import styled from "styled-components";
import { RegistrationFooter } from "./components";

export const FormError = styled.div`
  margin: 8px 0;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: #ffe5e5;
  border: 1px solid #ffb3b3;
  color: #cc0000;
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AuthorizationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authorizationSchema),
    mode: "onChange",
  });

  const [serverError, setServerError] = useState(null);

  const onSubmit = async ({ login, password }) => {
    setServerError(null);
    try {
      const { authorize } = server;
      const { error, res } = await authorize(login, password);
      if (error) {
        setServerError(error);
      } else {
        console.log("Authorize:", res);
      }
    } catch (error) {
      setServerError("Something went wrong. Try again.");
    }
  };

  return (
    <div className={className}>
      <Title>Log in</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Login..." {...register("login")} />
        {errors.login && <FormError>{errors.login.message}</FormError>}
        <Input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password && <FormError>{errors.password.message}</FormError>}
        <UIButton type="submit" disabled={!isValid}>
          Log in
        </UIButton>
        {serverError && <FormError>{serverError}</FormError>}
      </form>
      <RegistrationFooter />
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  width: 400px;
  margin: 50px auto;
  padding: 40px 30px;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
