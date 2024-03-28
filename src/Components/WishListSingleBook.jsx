/* eslint-disable react/prop-types */
import Tag from "./Tag";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const WishListSingleBook = ({wishedBook, handleWishCross}) => {


    const {bookId,  bookName, author, image, publisher, yearOfPublishing,  totalPages,  rating, category, tags} = wishedBook; 

    return (
        
        <div className="border lg:p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 flex flex-col lg:flex-row gap-6">
        <div className="bg-[#F3F3F3] flex justify-center items-center rounded-lg px-5 py-5">
            <img src={image} alt="" className="dark:bg-gray-500 w-32 h-40" />
        </div>

        <div className="space-y-2 p-2 lg:p-2 flex flex-col justify-between">
            <div>
                <div className="flex justify-between size">
                <h2 className="text-xl play font-semibold mb-2 tracking-wide">{bookName}</h2> 
                <TiDeleteOutline className="cursor-pointer" onClick={() => handleWishCross(bookId)} size={40} />

                </div>
                <p className="dark:text-gray-800 pb-3 border-b-2 border-dashed">By: {author}</p>

                <div className="flex flex-col lg:flex-row  lg:items-center gap-5">
                    <div className="flex  mt-4  gap-4">
                        <h3 className="font-bold">Tag</h3>
                        <div className=" flex flex-wrap gap-3 mb-2">
                            {tags.map((tag, idx) => (
                                <Tag key={idx} tag={tag}></Tag>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#131313CC] ">
                        <div className="mt-1">
                            <IoLocationOutline />
                        </div>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between lg:items-center text-[#13131399] lg:gap-6">
                    <div className="flex gap-2 items-center ">
                        <HiOutlineUsers className="mt-1" />
                        <p>Publisher: {publisher}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <MdOutlineContactPage className="mt-1" />
                        <p>Page {totalPages}</p>
                    </div>
                </div>

                <div className="divider"></div>
            </div>

            <div className="flex flex-wrap gap-4  items-center">
                <p className="bg-[#328EFF26] text-[#328EFF] px-3 py-2 rounded-xl">Category: {category}</p>
                <p className="bg-[#FFAC3326] text-[#FFAC33] px-3 py-2 rounded-xl">Rating: {rating}</p>
                <Link to={`/book/${bookId}`} className="bg-[#23BE0A] cursor-pointer active:scale-90 text-white px-3 py-2 rounded-xl">View Details</Link>
            </div>
        </div>
    </div>
    
    );
};

export default WishListSingleBook;