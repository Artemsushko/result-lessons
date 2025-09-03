import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import styles from "./App.module.css";

const emailSchema = yup.string().test({
  message: "Email должен быть вида example@mail.com",
  test: (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
});

const passwordSchema = yup
  .string()
  .test({
    message: "Минимум 8 символов.",
    test: (value) => !value || /.{8,}/.test(value),
  })
  .test({
    message: "Хотя бы одна цифра.",
    test: (value) => !value || /\d/.test(value),
  })
  .test({
    message: "Хотя бы одна заглавная буква.",
    test: (value) => !value || /[A-Z]/.test(value),
  })
  .test({
    message: "Хотя бы один спецсимвол.",
    test: (value) => !value || /[!@#$%^&*_]/.test(value),
  });

const validateAndGetErrorMessage = (schema, value) => {
  try {
    schema.validateSync(value, { abortEarly: false });
    return [];
  } catch ({ errors }) {
    return errors;
  }
};

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [errors, setErrors] = useState({
    email: [],
    password: [],
    confirmedPassword: [],
  });

  const { email, password, confirmedPassword } = formData;
  const submitBtnRef = useRef(null);
  const emailInputRef = useRef(null);

  const onEmailChange = ({ target }) => {
    const { value } = target;
    setFormData((prev) => ({ ...prev, email: value }));

    const newErrors = validateAndGetErrorMessage(emailSchema, value);

    setErrors((prev) => ({ ...prev, email: newErrors }));

    if (canSubmit) {
      focusSubmitBtn();
    }
  };

  const onPasswordChange = ({ target }) => {
    const value = target.value;

    setFormData((prev) => ({ ...prev, password: value }));

    const newErrors = validateAndGetErrorMessage(passwordSchema, value);

    setErrors((prev) => ({ ...prev, password: newErrors }));

    if (canSubmit) {
      focusSubmitBtn();
    }
  };

  const onPasswordConfirmedChange = ({ target }) => {
    const value = target.value;

    setFormData((prev) => ({ ...prev, confirmedPassword: value }));

    if (value.length === 0) {
      setErrors((prev) => ({ ...prev, confirmedPassword: [] }));
      return;
    }

    setErrors((prev) => ({
      ...prev,
      confirmedPassword: value !== password ? ["Пароли не совпадают"] : [],
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
      email: [],
      password: [],
      confirmedPassword: [],
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
    errors.email.length === 0 &&
    errors.password.length === 0 &&
    errors.confirmedPassword.length === 0;

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
      {errors.email.length > 0 && (
        <div className={styles.error}>
          {errors.email.map((er, i) => (
            <div key={i}>{er}</div>
          ))}
        </div>
      )}

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
      {errors.confirmedPassword.length > 0 && (
        <div className={styles.error}>
          {errors.confirmedPassword.map((er, i) => (
            <div key={i}>{er}</div>
          ))}
        </div>
      )}

      <button type="submit" ref={submitBtnRef} disabled={!canSubmit}>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default App;
