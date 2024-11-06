import { useState } from "react";

function useForm<T extends Record<string, any>>(
  initialValues: T
): FormState<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (onSubmit: () => void) => (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit();
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (values: T): Partial<Record<keyof T, string>> => {
    // Basic validation logic here
    return {}; // Return an empty object if no errors
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
