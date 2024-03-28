
import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {


const [books, setBooks] = useState([]);

useEffect( () => {
    fetch("/Books.JSON")
    .then (res => res.json())
    .then (data => setBooks(data))
} , [])


    return (
        <div>
            <h2 className="text-center mb-6 font-bold text-2xl">Books</h2>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {
            books.map((book) => <Book key={book.id} book={book}></Book>)
           } 
           </div>




        </div>
    );
};

export default Books;