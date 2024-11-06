type FetchState<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

type FormState<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (onSubmit: () => void) => (e: React.FormEvent) => void;
};
