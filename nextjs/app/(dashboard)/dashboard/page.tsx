import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link href={"/analytics"}>View Analytics</Link>
    </div>
  )
}

export default DashboardPage