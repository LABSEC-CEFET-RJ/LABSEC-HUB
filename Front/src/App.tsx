import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  function placeholderComponent(text: string) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold">{text}</h1>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={placeholderComponent("Home")} />
      <Route path="/login" element={placeholderComponent("Login")} />
      <Route path="/register" element={placeholderComponent("Register")} />

      <Route path="/lesson/:id" element={placeholderComponent("Lesson")} />
      <Route path="/module/:id" element={placeholderComponent("Module")} />
      <Route path="/modules" element={placeholderComponent("Modules Select")} />

      <Route path="/404" element={placeholderComponent("Not found")} />
    </Routes>
  );
}