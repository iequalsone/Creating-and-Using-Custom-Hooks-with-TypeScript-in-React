import React from "react";
import useForm from "../hooks/useForm";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm<LoginForm>({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log("Form Submitted:", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
