import React from 'react'

const Nav = (Props) => {
  return (
    <div className='flex w-full h-7 justify-between text-textCol'>
        <p>{Props.Page}</p>
        <p>Paces &gt; Dashboard &gt; {Props.Page}</p>
    </div>
  )
}

export default Nav