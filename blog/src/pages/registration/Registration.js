import { useForm } from "react-hook-form";
import { Error, Input, Title, UIButton } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils";
import { useState } from "react";
import styled from "styled-components";
import { server } from "../../bff";

const RegistrationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const [serverError, setServerError] = useState(null);

  const onSubmit = async ({ login, password }) => {
    setServerError(null);
    try {
      const { register } = server;
      const { error, res } = await register(login, password);
      if (error) {
        setServerError(error);
      } else {
        console.log("Welcome:", res);
      }
    } catch (error) {
      setServerError("Something went wrong. Try again.");
    }
  };

  return (
    <div className={className}>
      <Title>Sign up</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Enter login..."
          {...register("login")}
        />
        {errors.login && <Error>{errors.login.message}</Error>}

        <Input
          type="password"
          placeholder="Enter password..."
          {...register("password")}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Input
          type="password"
          placeholder="Confirm password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <Error>{errors.confirmPassword.message}</Error>
        )}
        <UIButton type="submit" disabled={!isValid}>
          Sign up
        </UIButton>
        {serverError && <Error>{serverError}</Error>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
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
