import React , {memo} from 'react'

const Navbar = ({adjective , getAdjective}) => {
    console.log("Navbar is rendering")
  return (
    <div>
        {adjective}
        <button>
            {getAdjective()}
        </button>
    </div>
  )
}

export default memo(Navbar)