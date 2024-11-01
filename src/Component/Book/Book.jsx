import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    let {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book
    return (
        <Link to={`/book/${bookId}`}>

            <div className='mx-auto'>

            <div className="card bg-gray-500 w-96 shadow-xl h-96 p-5">
            <figure>
                <img className='w-28 rounded-lg'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body flex items-center">
                <p className="card-title">
                {bookName}
                {/* <span className="badge badge-secondary">{category}</span> */}
            

                </p>
                <div className='flex gap-3'>
                {
                    tags.map(item=> <span className="btn btn-warning">{item}</span> )
                }
                </div>
                <p className='font-bold'>By:{author}</p>

                <div className='border-t-2 border-dashed divider'></div>
                <div className="card-actions justify-end items-center">
                <div className="btn badge-outline py-2 px-2">{category}</div>
                <div className="btn badge-outline p-2">{rating}</div>
                <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            
                </div>
                </div>
            </div>
            </div>



            </div>
                    
                    
                    
        </Link>
    );
};

export default Book;