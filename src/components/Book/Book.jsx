import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, bookName, category, image, author, rating, publisher, tags} = book;
    console.log(book)
    return (
        <div className="card w-96 border shadow-xl mb-20">
            <Link to={`/bookdetails/${bookId}`}>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-4 text-green-500 text-center">
                        {
                            tags.map(tag => <span className="bg-gray-200 py-1 px-4 rounded-full text-xs">{tag}</span>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className="text-sm">BY: {author}</p>
                    <div className="flex justify-between text-sm">
                        <div>
                            <span>{category}</span>
                        </div>
                        <div className="flex items-center gap-2"><span>{rating }</span><FaRegStar /></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;