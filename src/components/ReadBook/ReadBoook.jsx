import { Link } from "react-router-dom";

const ReadBoook = ({book}) => {
    console.log(book)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            
        <div className="flex gap-8 alins-center my-12">
            <div className="w-1/6 bg-gray-200 flex items-center justify-center rounded-lg">
                <img className="" src={image} alt="" />
            </div>
            <div className="w-6/6 space-y-2">
                <h2 className="text-xl font-semibold">{bookName}</h2>
                <p className="text-sm py-2">By: {author}</p>
                <div className="border-b pb-2 flex gap-8">
                    <div>
                        <span className="font-bold mr-4">Tags</span>
                        {
                            tags.map((tag, idx) => <span key={idx} className="bg-gray-200 mr-4 text-green-500 py-1 px-4 rounded-full text-xs">{tag}</span>)
                        }
                    </div>
                    <p>Category: {category}</p>

                </div>
                <div className="flex gap-8">
                    <p><span className="font-bold text-sm">Year of Publishing:</span> {yearOfPublishing}</p>
                    <p><span className="font-bold text-sm">Number of Pages:</span> {totalPages}</p>
                </div>
                <div className="flex gap-8">
                    <p><span className="font-bold text-sm">Publisher:</span> {publisher}</p>
                    <p><span className="font-bold text-sm">Rating:</span> {rating}</p>
                    <Link to={`/bookdetails/${bookId}`}><span className="bg-green-500 rounded-full py-1 px-2 text-xs text-white">View Details</span></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReadBoook;