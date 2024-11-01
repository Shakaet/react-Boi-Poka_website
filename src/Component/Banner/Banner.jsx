import React from 'react';
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>


            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={BannerImg}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold ms-10">Books to freshen up your bookshelf</h1>
                
                <button className="btn btn-warning mt-10 ms-10 text-white">View The List</button>
                </div>
            </div>
            </div>


            
        </div>
    );
};

export default Banner;