import { useParams, useOutletContext } from 'react-router-dom'

export const Book = () => {

    const { id } = useParams();

    const sharedContext = useOutletContext();

    console.log(sharedContext);

    return (
        <h1>Book {id}</h1>
    )
}