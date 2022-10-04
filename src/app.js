import { Link, Route, Routes } from "react-router-dom";
import { Book } from "./pages/Book";
import Home from "./pages/Home";

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
      </Routes>
    </>
  );
};
