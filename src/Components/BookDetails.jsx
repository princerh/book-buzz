
import { useLoaderData, useParams } from 'react-router-dom';
import Tag from './Tag';
import {  saveReadBooks, saveWishBooks } from '../Utilities/Utilities';
import { Helmet } from 'react-helmet';

const BookDetails = () => {

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
                
                <Helmet><title>BookDetails.{id}</title></Helmet>
                
                <div className='lg:col-span-6 bg-[#1313130D] flex justify-center item-center py-10 dark:bg-gray-500'>
                <img src={image} alt="" className=" w-68 lg:h-80  "
 />
                </div>
                <div className="space-y-2 px-2 mt-6 lg:mt-0 lg:col-span-6 mb-5
                ">
                    <h3 className="text-xl  font-bold sm:text-2xl play ">{bookName}</h3>
                    <p className='pb-3 border-b-2 border-dashed'>By: {author}</p>
                    <p className='pb-3 border-b-2 border-dashed'>{category}</p>
                    <p className='font-bold text-justify'>Review: <span className='text-[#131313B3] font-normal'>{review}</span></p>
                    <div>
                    <div className='flex mt-8 pb-3 border-b-2 border-dashed  gap-4'>
                    <p className=' font-bold flex flex-wrap gap-2  '>Tag: </p> <p className='flex font-medium flex-wrap gap-2'>{
            tags.map((tag, idx) => <Tag key={idx} tag={tag}></Tag>)
        }</p> 
                    </div>

        <div className='flex gap-8 mt-5 mb-5 items-center'>
            <div className='flex text-[#131313B3] flex-col gap-2'>
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
            </div>
            <div className='flex text-[#131313] font-bold flex-col gap-2'>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>
            </div>
        </div>
                </div>

            <div className='flex items-center justify-center lg:justify-start  gap-5'>
                <button onClick={() => handleRead(book)} className='btn bg-transparent border-2 w-2/5 lg:w-1/4'>Read</button>
                <button onClick={() => handleWish(book)} className='btn bg-[#50B1C9] text-white w-2/5 lg:w-1/4'>Wishlist</button>
            </div>
                </div>
                
            </div>
    );
};

export default BookDetails;