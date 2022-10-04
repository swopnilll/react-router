import { Link, Route, Routes } from "react-router-dom";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

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
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
