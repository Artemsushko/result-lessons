import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import styles from "./App.module.css";

const passwordSchema = yup
  .string()
  .required("Пароль обязателен")
  .test("password-rules", function (value) {
    const errors = [];
    if (!/.{8,}/.test(value)) errors.push("Минимум 8 символов.");
    if (!/\d/.test(value)) errors.push("Хотя бы одна цифра.");
    if (!/[A-Z]/.test(value)) errors.push("Хотя бы одна заглавная буква.");
    if (!/[!@#$%^&*_]/.test(value)) errors.push("Хотя бы один спецсимвол.");

    if (errors.length > 0) {
      return this.createError({ message: JSON.stringify(errors) });
    }

    return true;
  });

const fieldsSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email должен быть вида example@mail.com"
    )
    .required("Email обязателен"),
  password: passwordSchema.required("Пароль обязателен"),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Подтвердите пароль"),
});

export default function App() {
  const submitBtnRef = useRef(null);
  const emailInputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", confirmedPassword: "" },
    resolver: yupResolver(fieldsSchema, { abortEarly: false }),
  });

  const values = watch();

  const canSubmit = Boolean(
    values.email &&
      values.password &&
      values.confirmedPassword &&
      Object.keys(errors).length === 0
  );

  const emailError = errors.email?.message;
  const confirmedPasswordError = errors.confirmedPassword?.message;

  const sendFormData = (data) => {
    console.log(data);
    emailInputRef.current.focus();
  };

  useEffect(() => {
    if (canSubmit && !focused) {
      submitBtnRef.current.focus();
      setFocused(true);
    }
    if (!canSubmit && focused) {
      setFocused(false);
    }
  }, [canSubmit]);

  const getPasswordErrors = (errors) => {
    try {
      return JSON.parse(errors);
    } catch {
      return [errors];
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
      <input
        name="email"
        type="email"
        placeholder="Введите Email"
        ref={emailInputRef}
        {...register("email")}
      />
      {errors.email && <div className={styles.error}>{emailError}</div>}

      <input
        name="password"
        type="password"
        placeholder="Введите пароль"
        {...register("password")}
      />
      {errors.password && (
        <div className={styles.error}>
          {getPasswordErrors(errors.password.message).map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
      )}

      <input
        name="confirmedPassword"
        type="password"
        placeholder="Подтвердите пароль"
        disabled={!values.password}
        {...register("confirmedPassword")}
      />
      {errors.confirmedPassword && (
        <div className={styles.error}>{confirmedPasswordError}</div>
      )}

      <button type="submit" ref={submitBtnRef} disabled={!canSubmit}>
        Зарегистрироваться
      </button>
    </form>
  );
}
