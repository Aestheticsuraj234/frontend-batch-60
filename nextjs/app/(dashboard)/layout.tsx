import React from 'react'

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
        <h1 className='text-4xl text-lime-500'>Hello from Dashboard layout</h1>
        {children}
    </div>
  )
}
export default DashboardLayout