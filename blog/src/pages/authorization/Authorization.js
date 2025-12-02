import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authorizationSchema } from "../../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { Title, UIButton, Input, Error } from "../../components";
import styled from "styled-components";
import { RegistrationFooter } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPE, setUser } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { selectWasLogout } from "../../store/selectors/selectors";

const AuthorizationContainer = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wasLogout = useSelector(selectWasLogout);
  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(() => {
    if (wasLogout) {
      setTimeout(() => reset(), 0);
      dispatch({
        type: ACTION_TYPE.LOGOUT,
      });
    }
  }, [wasLogout, dispatch, reset]);

  const onSubmit = async ({ login, password }) => {
    setServerError(null);
    try {
      const { authorize } = server;
      const { error, res } = await authorize(login, password);
      if (error) {
        setServerError(error);
        return;
      }
      dispatch(setUser(res));
      navigate("/");
    } catch {
      setServerError("Something went wrong. Try again.");
    }
  };

  return (
    <div className={className}>
      <Title>Log in</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Login..."
          {...register("login", {
            onChange: () => setServerError(null),
          })}
        />
        {errors.login && <Error>{errors.login.message}</Error>}
        <Input
          type="password"
          placeholder="Password..."
          {...register("password", {
            onChange: () => setServerError(null),
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}

        <UIButton type="submit" disabled={!isValid}>
          Log in
        </UIButton>
        {serverError && <Error>{serverError}</Error>}
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
