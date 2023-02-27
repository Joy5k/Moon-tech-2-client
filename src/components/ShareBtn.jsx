import React from 'react';

const ShareBtn = ({data}) => {
    return (
        <div>
            <button className='btn bg-blue-500 text-xl font-bold'>{data}</button>
        </div>
    );
};

export default ShareBtn;