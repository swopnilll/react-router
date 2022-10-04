import { Link, Outlet } from 'react-router-dom'

export const BookLayout = () => {
    return (
        <>
            <Link to="/books/1" >Book 1</Link>
            <br></br>
            <Link to="/books/2" >Book 2</Link>
            <br></br>
            <Link to="/books/3" >Book 3</Link>
            <br></br>
            <Link to="/books/4" >Book 4</Link>
            <br></br>
            <Link to="/books/5" >Book 5</Link>
            <br></br>
            <Link to="/books/new">New Book</Link>
            <br></br>
            <Outlet context={{ hello: "world" }} />
        </>
    )
}