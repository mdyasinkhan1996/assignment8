import { useEffect, useState } from "react";
import { getReadBookItems, getWishBookItems } from "../../Utility/LocalStorage";
import ReadBoook from "../ReadBook/ReadBoook";
import { useLoaderData } from "react-router-dom";

const ListtedBooks = () => {

    const allBooks = useLoaderData();
    const [readData, setReadData] = useState([]);
    useEffect(()=>{
        const readLocalStr = getReadBookItems();
        if(readLocalStr.length > 0){
            const readBooks = allBooks.filter(book => readLocalStr.includes(book.bookId));
            setReadData(readBooks);
        }
    }, []);

    const wishlistBooks = ()=> {
        const wishLocalStr = getWishBookItems();
        if(wishLocalStr.length > 0){
            const wishBooks = allBooks.filter(book => wishLocalStr.includes(book.bookId));
            setReadData(wishBooks);
        }
    }
    
    return (
        <div>
            <div className="bg-gray-300 text-center rounded-lg py-4 mb-6">
                <h2 className="text-4xl font-bold">Books</h2>
            </div>
            <div className="text-center mb-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div className="space-x-6">
                    <button className="bg-gray-100 py-1 px-4">Read Books</button>
                    <button onClick={wishlistBooks} className="bg-gray-100 py-1 px-4">Wishlist Books</button>
                </div>
                {
                    readData.map(readBook => <ReadBoook key={readBook.bookId} book={readBook}></ReadBoook>)
                }
            </div>
            
        </div>
    );
};

export default ListtedBooks;