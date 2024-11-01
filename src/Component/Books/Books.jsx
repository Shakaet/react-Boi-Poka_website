import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    let[Books,setBooks]=useState([])

    useEffect(()=>{
        fetch("/public/booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])


    return (
        <div>
            <h2 className='font-bold text-center text-4xl mb-10 mt-10'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
            {
                Books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;