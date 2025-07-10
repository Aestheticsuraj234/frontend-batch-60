import React from 'react'

const InfoCard = ({count , title}) => {
  return (
    <div className='my-24 bg-black/90 border border-zinc-700 rounded-md px-4 py-4 flex flex-col justify-center items-center'>
        <span className='text-3xl text-yellow-500 font-bold'>{count}</span>
        <h1 className='text-xl text-zinc-400 font-semibold '>{title}</h1>
    </div>
  )
}

export default InfoCard