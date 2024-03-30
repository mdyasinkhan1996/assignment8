import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch("/books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-center font-semibold text-4xl mb-12">Books</h2>
           <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
           </div>
        </div>
    );
};

export default Books;