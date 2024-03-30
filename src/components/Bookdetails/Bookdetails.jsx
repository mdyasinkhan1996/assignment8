import { useLoaderData, useParams } from "react-router-dom";
import { seveBookItems } from "../../Utility/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Bookdetails = () => {

    const params = useParams();
    const books = useLoaderData();
    const book = books.find(book => book.bookId == params.bookId);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const hendleBookItems = (id, key) =>{
        toast("Add to Wishlist!")
        seveBookItems(id, key)
    }

    return (
        <div className="flex alins-center my-12">
            <div className="w-1/2 p-24">
                <img className="w-5/6" src={image} alt="" />
            </div>
            <div className="w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold">{bookName}</h2>
                <p className="text-sm py-2">By: {author}</p>
                <p className="border-b border-t py-2">{category}</p>
                <p><span className="font-bold">Review</span> {review}</p>
                <div>
                    <span className="font-bold mr-4">Tags</span>
                    {
                        tags.map((tag, idx) => <span key={idx} className="bg-gray-200 mr-4 text-green-500 py-1 px-4 rounded-full text-xs">{tag}</span>)
                    }
                </div>
                <p><span className="font-bold text-sm">Number of Pages:</span> {totalPages}</p>
                <p><span className="font-bold text-sm">Publisher:</span> {publisher}</p>
                <p><span className="font-bold text-sm">Year of Publishing:</span> {yearOfPublishing}</p>
                <p><span className="font-bold text-sm">Rating:</span> {rating}</p>
                <div>
                    <button onClick={()=>hendleBookItems(bookId, 'read-book-item')} className="btn mr-4">Read</button>
                    <button onClick={()=>hendleBookItems(bookId, 'wishlist-book-item')} className="btn">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Bookdetails;