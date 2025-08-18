"use client";
import React, { useEffect, useState } from 'react'
import Card from './card';

const ClientPage = () => {
   const [data , setData] = useState(null)

   useEffect(()=>{
    async function fetchData() {
        const res = await fetch("https://api.github.com/users/aestheticsuraj234")
        const data = await res.json()
        setData(data)
    }
    fetchData()
   },[])
  return (
    <div>
        {JSON.stringify(data)}
        <button onClick={()=>alert("Hello world")}>Click me</button>
        <Card/>
    </div>
  )
}

export default ClientPage