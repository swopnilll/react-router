import { Route, Routes } from "react-router-dom";
import { Book } from "./pages/Book";
import Home from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Book />}   />
    </Routes>
  );
};
