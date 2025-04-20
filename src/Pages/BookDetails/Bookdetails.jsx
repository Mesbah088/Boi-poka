import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Component/Utility/addToDB';


const Bookdetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image, author, category, review, tags,totalPages,rating,   publisher,
        yearOfPublishing } = singleBook;
  

        const handleMarkAsRead = id => {
            //  Store with Id
            // where to store
            // array or collection
            // if book already exist  the show a  alart
            //  if book not exist then push in the collection or array
    
          
    
     
            addToStoredDB(id)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 m-5">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[425px] h-auto p-5 bg-[#1313130D] rounded-2xl"
            src={image}
            alt=""
          />
        </div>
      
        {/* Content Section */}
        <div className="w-full lg:w-[60%]">
          <h5 className="font-bold text-2xl sm:text-3xl md:text-4xl">{bookName}</h5>
      
          <h1 className="text-base sm:text-lg md:text-xl font-medium mt-2">BY: {author}</h1>
      
          <div className="border-t border-dashed my-3" />
      
          <h1 className="text-base sm:text-lg md:text-xl font-medium">{category}</h1>
      
          <div className="border-t border-dashed my-3" />
      
          <h1>
            <span className="text-base sm:text-lg md:text-xl font-bold">Review</span>: {review}
          </h1>
      
          <div className="mt-4">
            <span className="font-bold">Tag:</span>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0A0D] m-1 px-3 py-1 text-sm rounded-2xl"
              >
                #{tag}
              </button>
            ))}
          </div>
      
          <div className="border-t border-dashed my-3" />
      
          <h1>Number of Pages: {totalPages}</h1>
          <h1>Publisher: {publisher}</h1>
          <h1>Year of Publishing: {yearOfPublishing}</h1>
          <h1>Rating: {rating}</h1>
      
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn btn-accent"
            >
              Mark as Read
            </button>
            <button className="btn btn-info">Add To WishList</button>
          </div>
        </div>
      </div>
      
    );
};

export default Bookdetails;