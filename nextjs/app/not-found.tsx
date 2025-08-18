import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center h-screen justify-center'>
        <Image src={"/not-found.svg"} alt='Not found Image' height={400} width={400}/>
        <Link href={"/"} className='px-3 py-3 bg-lime-500 font-bold rounded-lg border border-lime-600 mt-5'>
            Go Home
        </Link>
    </div>
  )
}

export default NotFound