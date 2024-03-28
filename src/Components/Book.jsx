/* eslint-disable react/prop-types */
import { IoIosStarOutline } from "react-icons/io";
import Tag from "./Tag";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link to={`/book/${bookId}`} className="border cursor-pointer p-6 rounded-md shadow-md hover:scale-105 dark:bg-gray-50 dark:text-gray-900">
            <div className="bg-[#F3F3F3] flex justify-center rounded-lg py-5">
                <img src={image} alt="" className="dark:bg-gray-500 w-32 h-40" />
            </div>
            <div className="mt-4 flex flex-wrap gap-1 mb-2">
                {/* Add flex-wrap and gap properties */}
                {tags.map((tag, idx) => (
                    <Tag key={idx} tag={tag}></Tag>
                ))}
            </div>
            <h2 className="text-xl play font-semibold mb-2 tracking-wide">{bookName}</h2>
            <p className="dark:text-gray-800 pb-3 border-b-2 border-dashed">By: {author}</p>
            <div className="flex pt-3 justify-between items-center">
                <p>{category}</p>
                <div className="flex items-center gap-2">
                    <p>{rating}</p>
                    <IoIosStarOutline />
                </div>
            </div>
        </Link>
    );
};

export default Book;
