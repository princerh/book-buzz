import { useState, useEffect } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
import ReadList from "./ReadList";
import WishList from "./WishList";
import { deleteRead, deleteWish, getReadBooks, getWishBooks } from "../Utilities/Utilities"; // Assuming you have these utility functions

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readBooks, setReadBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Sort By');

    useEffect(() => {
        const allReadBooks = getReadBooks();
        setReadBooks(allReadBooks);
    }, []);

    useEffect(() => {
        const allWishedBooks = getWishBooks();
        setWishedBooks(allWishedBooks);
    }, []);

    useEffect(() => {
        setSelectedOption('Sort By');
    }, [tabIndex]);

    const handleReadBooks = () => {
        setTabIndex(0);
    };

    const handleWishlistBooks = () => {
        setTabIndex(1);
    };

    const handleSort = (filter) => {
        setSelectedOption(filter);
        if (filter === "rating" && tabIndex === 0) {
            const newReadBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
            setReadBooks(newReadBooks);
            
        } 
        else if (filter === "rating" && tabIndex === 1) {
            const newWishedBooks = [...wishedBooks].sort((a, b) => b.rating - a.rating);
            setWishedBooks(newWishedBooks);
            // setSelectedOption('Rating');
        } 
        else if (filter === "pages" && tabIndex === 0) {
            const newReadBooksPages = [...readBooks].sort((a,b) => b.totalPages - a.totalPages)
            setReadBooks(newReadBooksPages);
            // setSelectedOption('Number of pages');
        }
        else if (filter === "pages" && tabIndex === 1) {
            const newWishedBooksPages = [...wishedBooks].sort((a,b) => b.totalPages - a.totalPages)
            setWishedBooks(newWishedBooksPages); 
            // setSelectedOption('Number of pages');
        }
        else if (filter === "year" && tabIndex === 0) {
            const newReadBooksYear = [...readBooks].sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadBooks(newReadBooksYear);
            // setSelectedOption('Published year');
        }
        else if (filter === "year" && tabIndex === 1) {
            const newWishedBooksYear = [...wishedBooks].sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
            setWishedBooks(newWishedBooksYear);
            // setSelectedOption('Published year');
        }
    };
    
    const handleCross = (id) => {
        deleteRead(id);
        const restRead = getReadBooks();
        setReadBooks(restRead)
    }

    const handleWishCross = (id) => {
        deleteWish(id);
        const restWish = getWishBooks();
        setWishedBooks(restWish); 
    }

    return (
        <div>
            <div className="bg-[#1313130D] rounded-lg mt-4 mb-6 flex justify-center w-full py-2">
                <h1 className="font-extrabold lg:text-2xl">Books</h1>
            </div>

            <div className="flex justify-center">
                <select className="select select-bordered bg-[#23BE0ACC] font-bold text-white w-3/10" 
                        onChange={(e) => handleSort(e.target.value)}
                        value={selectedOption}>
                    <option disabled value="Sort By">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of pages</option>
                    <option value="year">Published year</option>
                </select>
            </div>


<div className="mt-4 text-xl font-bold text-red-500">
    <marquee>Add books to wish list or read list from book details section to watch them here.</marquee>
</div>

            <div className="flex mt-10">
                <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <a href="#" onClick={handleReadBooks} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   rounded-t-lg dark:border-gray-600 dark:text-gray-900 transition ${tabIndex === 0 ? "border border-b-0" : "border-b"}`}>
                        <span>Read Books</span>
                    </a>
                    <a href="#" onClick={handleWishlistBooks} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   rounded-t-lg transition dark:border-gray-600 dark:text-gray-900 ${tabIndex === 1 ? "border border-b-0" : "border-b"}`}>
                        <span>Wishlist Books</span>
                    </a>
                </div>
            </div>

            <div>
                {tabIndex === 0 && <ReadList readBooks={readBooks} handleCross={handleCross}></ReadList>}
                {tabIndex === 1 && <WishList wishedBooks={wishedBooks} handleWishCross={handleWishCross}></WishList>}
            </div>
        </div>
    );
};


export default ListedBooks;
