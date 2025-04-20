import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allbooks, setAllBooks] = useState([]);

    useEffect(()=> {
        fetch("book.json")
        .then(res => res.json())
        .then(data =>{
         console.log(data)
        })
        //   const facthData =async ()=>{
        //       const res = await fetch("book.json");
        //       const data =await res.json()
        //       console.log(data);

        //   }
        //   facthData()
    },[])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
         {
               data.map((singleBook)=><Book key={singleBook.bookID} singleBook={singleBook}></Book>)
             }
         </div>
            </Suspense>
        </div>
    );
};

export default Books;