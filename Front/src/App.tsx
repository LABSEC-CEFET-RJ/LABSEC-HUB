import { Text } from "@chakra-ui/react";
import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Text>Home</Text>} />
      <Route path="/login" element={<Text>Login</Text>} />
      <Route path="/register" element={<Text>Register</Text>} />

      <Route path="/lesson/:slug" element={<Text>Lesson</Text>} />
      <Route path="/module/:slug" element={<Text>Module</Text>} />
      <Route path="/modules" element={<Text>Modules Select</Text>} />

      <Route path="*" element={<Text>Not found</Text>} />
    </Routes>
  );
}