import { Link } from 'react-router-dom'


export const BookList = () => {
  return (
    <>
      <h1>BookList</h1>
      <Link to="/books/1" >Book 1</Link>
      <Link to="/books/2" >Book 2</Link>
      <Link to="/books/3" >Book 3</Link>
      <Link to="/books/4" >Book 4</Link>
      <Link to="/books/5" >Book 5</Link>
      <br></br>
      <Link to="/books/new">New Book</Link>
    </>
  )
}