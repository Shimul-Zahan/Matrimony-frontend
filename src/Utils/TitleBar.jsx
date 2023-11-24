import React from 'react'

const TitleBar = ({ title, subTitle }) => {
    return (
        <div className='text-center my-20 font-mono'>
            <h1 className='text-2xl lg:text-5xl font-bold'>{title}</h1>
            <p className='text-lg lg:text-2xl font-thin'>{subTitle}</p>
        </div>
    )
}

export default TitleBar