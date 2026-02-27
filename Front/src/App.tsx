import { Text } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/login" element={<Text>Login</Text>} />
      <Route path="/register" element={<Text>Register</Text>} />

      <Route path="/lesson/:slug" element={<Text>Lesson</Text>} />
      <Route path="/module/:slug" element={<Text>Module</Text>} />
      <Route path="/modules" element={<Text>Modules Select</Text>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
