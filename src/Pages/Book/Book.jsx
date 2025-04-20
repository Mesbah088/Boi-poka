import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  // console.log(singleBook);
  const { bookName, author, bookId, image, category, rating, tags,
    publisher,
    yearOfPublishing
  } = singleBook;
  return (
  
    <Link to={`/Bookdetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm  ">

<div className='p-10 m-6 flex justify-center items-center px-16 rounded-md bg-[#eee]'>
  <img className='h-[310px]   '
    src={image}
    alt="Shoes" />
</div>

<div className="card-body">
  <div className='flex justify-center gap-10' >
    {
      tags.map(tag => <button>{tag}</button>)
    }
  </div>
  <h2 className="card-title">
    {bookName}
    <div className="badge badge-secondary"> {
      yearOfPublishing
    } </div>
  </h2>
  <p> Published by: {
    publisher} </p>
     <div className='border-t border-dashed'>

     </div>
  <div className="card-actions justify-end">
    <div className="badge badge-outline">{category}</div>
    <div className="badge badge-outline">{rating} <FaStar /></div>
  </div>
</div>
</div>
    </Link>
  );
};

export default Book;