
const Avatar = ({imageUrl , Name , htmlFor="#"}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-14'>
        <img src={imageUrl} height={200} width={200} alt="avatar" className='border-2 border-yellow-400 rounded-full' />
        <h2 className='rounded-sm text-3xl text-white font-bold mt-4 px-2 py-2 border border-indigo-400 border-dashed'>{Name}</h2>
        <a href={htmlFor} target="_blank" className="text-base font-semibold text-blue-500 underline mt-4">
          Visit
        </a>
    </div>
  )
}

export default Avatar