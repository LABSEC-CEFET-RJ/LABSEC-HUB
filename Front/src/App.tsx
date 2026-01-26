import {
  Routes,
  Route
} from "react-router-dom";

import { InputGroup } from "./components/ui/InputGroup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<InputGroup m="auto" label="Name" placeholder="Type your name" />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />

      <Route path="/lesson/:slug" element={<h1>Lesson</h1>} />
      <Route path="/module/:slug" element={<h1>Module</h1>} />
      <Route path="/modules" element={<h1>Modules Select</h1>} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}