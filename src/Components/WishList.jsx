/* eslint-disable react/prop-types */

import WishListSingleBook from "./WishListSingleBook";

const WishList = ({wishedBooks, handleWishCross}) => {


    return (
        <div className="flex flex-col gap-8 mt-8">

{
    wishedBooks.map(wishedBook => <WishListSingleBook key={wishedBook.bookId} handleWishCross={handleWishCross}  wishedBook={wishedBook}></WishListSingleBook>)
}


       </div>
    );
};

export default WishList;