import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Main Menu</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="/lesson/:id" element={<h1>Lesson</h1>} />
      <Route path="/module/:id" element={<h1>Module</h1>} />
      <Route path="/modules" element={<h1>Module select</h1>} />
      <Route path="/404" element={<h1>Not found</h1>} />
    </Routes>
  );
}