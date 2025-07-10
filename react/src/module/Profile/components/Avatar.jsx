import React from 'react'

const Avatar = ({imageUrl , Name}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-14'>
        <img src={imageUrl} height={200} width={200} alt="avatar" className='border-2 border-yellow-400 rounded-full' />
        <h2 className='rounded-sm text-3xl text-white font-bold mt-4 px-2 py-2 border border-indigo-400 border-dashed'>{Name}</h2>
    </div>
  )
}

export default Avatar