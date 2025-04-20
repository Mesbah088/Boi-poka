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
        <div className='flex gap-20 m-5'>
            <div >
                <img className='w-[425px] h-[564px] p-10 bg-[#1313130D] rounded-2xl' src={image} alt="" />
            </div >

            
            <div className='w-[60%]'>
                <h5 className='font-bold text-4xl'>{bookName}</h5>

                <h1 className='text-[20px] font-medium'>BY: {author}</h1>
                <div className='border-t border-dashed'>

                </div>
                <h1 className='text-[20px] font-mediuml' >{category}</h1>
                <div className='border-t border-dashed'>

                </div>
                <h1 > <span className='text-[20px] font-bold'>Review</span>: {review}</h1>
                <div >
              <span className='font-bold'>  Tag:</span>
                     {
                        tags.map(tag => <button className='text-[#23BE0A] bg-[#23BE0A0D] m-2 rounded-2xl'>#{tag}</button>)
                    }
                </div>
                <div className='border-t border-dashed'>

                </div>
                <h1>Number of Pages:{totalPages}</h1>
                <h1>Publisher: {publisher}</h1>
                <h1>Year of Publishing: {yearOfPublishing}</h1>
                <h1>Rating:{rating}</h1>
             
       
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mar as Read</button>
            <button className="btn btn-info m-2">Add To WishList</button>
                
            </div>
        </div>
    );
};

export default Bookdetails;