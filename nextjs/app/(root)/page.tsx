import React from 'react'
import fs from "fs/promises"
const Page = async() => {

 const res = await fetch("https://api.github.com/users/aestheticsuraj234")
 const data = await res.json()
  return (
    <div>
      {JSON.stringify(data)}
      {/* <button onClick={()=>alert("Hello")}>Click me</button> */}
    </div>
  )
}

export default Page