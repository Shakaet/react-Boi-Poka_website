import { getItem } from 'localforage';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AddToLocalStorage, AddToLocalStorageW } from '../AddToDb';


const BookDetails = () => {
    let params = useParams();
    let id = parseInt(params.bookId); // Ensure the bookId is an integer
    let data = useLoaderData();

    let book = data.find(item => item.bookId === id);

    

    let { bookId, image } = book;

    console.log(typeof bookId)

    let handleMarkAsRead = (id) => {
        console.log(id)
         AddToLocalStorage(id)
          
       
    };

    let handleWishList= (id) => {
        console.log(id)
         AddToLocalStorageW(id)
          
       
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2>Hello Books {bookId}</h2>
            <img className='w-24 rounded mt-10' src={image} alt={`Book cover of ${bookId}`} /> {/* Added alt attribute for accessibility */}
            <br />
            <div className='flex gap-5'>
                <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline'>Mark as Read</button>
                <button onClick={()=>handleWishList(bookId)} className='btn btn-warning ms-5'>Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;