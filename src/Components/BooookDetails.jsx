
import { useLoaderData, useParams } from 'react-router-dom';
import Tag from './Tag';
import {  saveReadBooks, saveWishBooks } from '../Utilities/Utilities';

const BooookDetails = () => {

        const books = useLoaderData();
        
        const { id } = useParams()
        const idInt = parseInt(id)
        const book = books.find(book => book.bookId === idInt)

        const { review, bookName, author, image, publisher, yearOfPublishing,  totalPages,  rating, category, tags} = book;

console.log(book)


const handleRead = (book) =>{
saveReadBooks(book)
}

const handleWish = (book)=> {
    saveWishBooks(book)
}
    return (
        <div className="block max-w-sm mt-7  mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid gap-5 lg:grid-cols-12 dark:bg-gray-50">
                <div className='lg:col-span-6 bg-[#1313130D] flex justify-center item-center py-10 dark:bg-gray-500'>
                <img src={image} alt="" className=" w-68 h-80  "
 />
                </div>
                <div className="space-y-2 mt-6 lg:mt-0 lg:col-span-6 mb-5
                ">
                    <h3 className="text-xl font-bold sm:text-2xl ">{bookName}</h3>
                    <p className='pb-3 border-b-2 border-dashed'>By: {author}</p>
                    <p className='pb-3 border-b-2 border-dashed'>{category}</p>
                    <p className='font-bold text-justify'>Review: <span className='text-[#131313B3] font-normal'>{review}</span></p>
                    <div>
                    <p className='mt-8 font-bold flex items-center gap-2 pb-3 border-b-2 border-dashed'>Tag: <span className='flex gap-2'>{
            tags.map((tag, idx) => <Tag key={idx} tag={tag}></Tag>)
        }</span> </p>

        <div className='flex gap-8 mt-5 mb-5 items-center'>
            <div className='flex flex-col gap-2'>
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
            </div>
            <div className='flex flex-col gap-2'>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
        </div>
                </div>

            <div className='flex items-center  gap-5'>
                <button onClick={() => handleRead(book)} className='btn bg-transparent border-2 w-1/4'>Read</button>
                <button onClick={() => handleWish(book)} className='btn bg-[#50B1C9] text-white w-1/4'>Wishlist</button>
            </div>
                </div>
                
            </div>
    );
};

export default BooookDetails;