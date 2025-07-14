import React from 'react'

const EmptyState = ({imageSrc , title , description}) => {
  return (
    <div className='flex flex-col justify-center items-center  w-full'>
        <img src={imageSrc} alt="empty" className='w-124 h-124' />
        <h2 className='text-2xl font-bold text-white'>{title}</h2>
        <p className='text-zinc-400'>{description}</p>
    </div>
  )
}

export default EmptyState