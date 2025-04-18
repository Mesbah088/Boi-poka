import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allbooks, setAllBooks] = useState([]);

    useEffect(()=> {
        fetch("book.json")
        .then(res => res.json())
        .then(data =>{
         console.log(data)
        })
        //   const facthDat =async ()=>{
        //       const res = await fetch("book.json");
        //       const data =await res.json()
        //       console.log(data);

        //   }
        //   facthDat()
    },[])
    return (
        <div>
            <h1>Ami books</h1>
        </div>
    );
};

export default Books;