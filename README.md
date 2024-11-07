# Creating and Using Custom Hooks with TypeScript in React

Welcome to the **Custom Hooks in TypeScript** repository! This repo contains code examples for the article *Creating and Using Custom Hooks with TypeScript in React*. It explores best practices for building custom hooks in React with TypeScript, providing strong typing, modularity, and reusability for your applications.

## 📚 Overview

Custom hooks are an excellent way to encapsulate and share reusable logic across components in React applications. This repository covers:

- **Data Fetching Hook (`useFetchData`)**: A custom hook for fetching data from APIs.
- **Form Handling Hook (`useForm`)**: A custom hook to manage form state and validation.
- **Examples**: Demonstrations of these hooks in component implementations.

Each example is written in TypeScript to ensure type safety and a better development experience.

## 🔧 Project Structure
```
repo-root/
├── src/
│   ├── hooks/
│   │   ├── useFetchData.ts          # Custom hook for data fetching
│   │   └── useForm.ts               # Custom hook for form state management
│   ├── components/
│   │   ├── PostsList.tsx            # Example component using useFetchData
│   │   └── LoginForm.tsx            # Example component using useForm
│   ├── types/
│   │   └── formTypes.ts             # Shared types related to form data
│   ├── App.tsx                      # Main application component
│   └── index.tsx                    # Entry point
├── README.md
├── tsconfig.json
└── package.json
```

## ✨ Features

- **Type-Safe Custom Hooks**: Build custom hooks with TypeScript, ensuring reliability and improved debugging.
- **Data Fetching Hook (`useFetchData`)**: Generic hook for fetching and displaying data from APIs.
- **Form Handling Hook (`useForm`)**: Hook for managing form input, validation, and error handling.
- **React Components**: Example components (`PostsList` and `LoginForm`) that demonstrate real-world usage of custom hooks.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**
- **TypeScript** (installed via `devDependencies`)

### Installation

Clone the repository and install dependencies:
```
git clone https://github.com/iequalsone/Creating-and-Using-Custom-Hooks-with-TypeScript-in-React.git
cd Creating-and-Using-Custom-Hooks-with-TypeScript-in-React
npm install
```

### Running the App

To start the development server, run:
```
npm run dev
```

The app will run on [http://localhost:5173/](http://localhost:5173/) by default.

## 🛠 Using the Custom Hooks

### `useFetchData`

This hook simplifies API data fetching by handling loading, error states, and typing for fetched data. Check out `src/hooks/useFetchData.ts` for the hook and `src/components/PostsList.tsx` for an example component using this hook.

#### Example:
```typescript
const { data, error, isLoading } = useFetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');
```

### `useForm`

A hook for managing form state, including input values and validation errors. See `src/hooks/useForm.ts` for the hook and `src/components/LoginForm.tsx` for a component demonstrating usage.

#### Example:
```typescript
const { values, errors, handleChange, handleSubmit } = useForm<LoginForm>({
  email: '',
  password: '',
});
```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/iequalsone/Creating-and-Using-Custom-Hooks-with-TypeScript-in-React/blob/main/LICENSE) file for details.

## 💬 Contributing

Contributions are welcome! If you’d like to enhance these examples or add additional use cases, feel free to fork the repository, submit a pull request, or open an issue.

Thank you for checking out this repository! I hope these examples inspire you to harness the power of custom hooks in React with TypeScript. Happy coding! 😊
