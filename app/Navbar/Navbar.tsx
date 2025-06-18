import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar = () => {
  return (
    
    <div className='bg-black text-white p-4 flex flex-row justify-between items-center rounded-b-2xl shadow-md sticky top-0 left-0 w-full z-50'>
      <div>
       <Link href='/'><Image src={'/logo.svg'} alt='logo' width={100} height={100} /></Link> 
      </div>
      <div>
      <ul className='flex justify-between items-center gap-4'>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/Login'}><li>Login</li></Link>
        <Link href={'/Contact'}><li>Contact</li></Link>
        <Link href={'/Register'}><li>Register</li></Link>
      </ul>
      </div>
    </div>
  )
}

export default navbar