import React from 'react'

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
        <h1 className='text-4xl text-lime-500'>Hello from auth layout</h1>
        {children}
    </div>
  )
}

export default AuthLayout