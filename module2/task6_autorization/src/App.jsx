import { useState, useRef } from "react";
import styles from "./App.module.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: [],
    confirmedPassword: "",
  });

  const submitBtnRef = useRef(null);
  const emailInputRef = useRef(null);

  const { email, password, confirmedPassword } = formData;

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Email должен быть вида example@mail.com";

  const validatePassword = (value) => {
    if (!value) return [];

    let error = [];
    if (!/.{8,}/.test(value)) error.push("Минимум 8 символов.");
    if (!/[A-Z]/.test(value)) error.push("Хотя бы одна заглавная буква.");
    if (!/\d/.test(value)) error.push("Хотя бы одна цифра.");
    if (!/[!@#$%^&*_]/.test(value)) error.push("Хотя бы один спецсимвол.");

    return error;
  };

  const onEmailChange = ({ target }) => {
    const { value } = target;
    setFormData((prev) => ({ ...prev, email: value }));

    const error = validateEmail(value);
    setErrors((prev) => ({ ...prev, email: error }));

    if (canSubmit) {
      focusSubmitBtn();
    }
  };

  const onPasswordChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, password: target.value }));

    const value = target.value;
    const error = validatePassword(value);
    setErrors((prev) => ({
      ...prev,
      password: error,
      confirmedPassword:
        confirmedPassword && confirmedPassword !== value
          ? "Пароли не совпадают"
          : "",
    }));

    if (canSubmit) {
      focusSubmitBtn();
    }
  };

  const onPasswordConfirmedChange = ({ target }) => {
    const value = target.value;

    setFormData((prev) => ({ ...prev, confirmedPassword: value }));

    if (value.length === 0) {
      setErrors((prev) => ({ ...prev, confirmedPassword: "" }));
      return;
    }

    setErrors((prev) => ({
      ...prev,
      confirmedPassword: value !== password ? "Пароли не совпадают" : "",
    }));

    if (canSubmit) {
      focusSubmitBtn();
    }
  };

  const sendFormData = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      email: "",
      password: "",
      confirmedPassword: "",
    });

    setErrors({
      email: "",
      password: [],
      confirmedPassword: "",
    });

    emailInputRef.current.focus();
  };

  const focusSubmitBtn = () => {
    submitBtnRef.current.focus();
  };

  const canSubmit =
    email &&
    password &&
    confirmedPassword &&
    !errors.email &&
    errors.password.length === 0 &&
    !errors.confirmedPassword;

  return (
    <form className={styles.form} onSubmit={sendFormData}>
      <input
        name="email"
        type="email"
        value={email}
        placeholder="Введите Email"
        ref={emailInputRef}
        onChange={onEmailChange}
      />
      {errors.email && <div className={styles.error}>{errors.email}</div>}

      <input
        name="password"
        type="password"
        value={password}
        placeholder="Введите пароль"
        onChange={onPasswordChange}
      />
      {errors.password.length > 0 && (
        <div className={styles.error}>
          {errors.password.map((er, i) => (
            <div key={i}>{er}</div>
          ))}
        </div>
      )}

      <input
        name="confirmedPassword"
        type="password"
        value={confirmedPassword}
        placeholder="Подтвердите пароль"
        disabled={!password}
        onChange={onPasswordConfirmedChange}
      />
      {errors.confirmedPassword && (
        <div className={styles.error}>{errors.confirmedPassword}</div>
      )}

      <button type="submit" ref={submitBtnRef} disabled={!canSubmit}>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default App;
