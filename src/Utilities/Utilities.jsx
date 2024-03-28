// get books 


import { toast } from "react-toastify";

  
  
export const getReadBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem("ReadBooks")
    if(storedBooks){
        books = JSON.parse(storedBooks);
        
    }
    return books;
} 


// save books 
export const saveReadBooks = (book) => {
    let books = getReadBooks();
    const isExist = books.find(b => b.bookId === book.bookId)

    if(isExist){
      return  toast.warning("Already Added to Read List")
    }
books.push(book); 
localStorage.setItem("ReadBooks", JSON.stringify(books))
toast.success("Added to Read list")
}



export const getWishBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem("WishedBooks")
    if(storedBooks){
        books = JSON.parse(storedBooks);
        
    }
    return books;
}



export const saveWishBooks = (book) => {
    let booksRead = getReadBooks();
    let wishedBooks = getWishBooks();
    
    // Check if the book already exists in the read list
    const isExistOnRead = booksRead.find(b => b.bookId === book.bookId);
    if (isExistOnRead) {
        toast.warning("Already Added to Read List");
        return; // Exit the function if book already exists in read list
    }

    // Check if the book already exists in the wish list
    const isExistOnWish = wishedBooks.find(w => w.bookId === book.bookId);
    if (isExistOnWish) {
        toast.warning("Already Added to Wish List");
        return; // Exit the function if book already exists in wish list
    }

    // If the book does not exist in either list, add it to the wish list
    wishedBooks.push(book);
    localStorage.setItem("WishedBooks", JSON.stringify(wishedBooks));
    toast.success("Added to Wish List");
}

