import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-20 bg-[#1313130D] my-[118px] rounded-2xl'>
        <div>
            <p className='text-[56px]'>Books to freshen up your bookshelf</p>
            <button className='btn btn-primary mt-5 '>Veiw The list</button>
        </div>
        <div>
            <img className='w-[318px] font-bold text-[#131313]' src="/src/assets/image.png" alt="Book" />
        </div>
    </div>
    );
};

export default Banner;