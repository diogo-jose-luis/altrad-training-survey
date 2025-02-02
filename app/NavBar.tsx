import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 p-5 text-dark'>
        <Link href='/' className='mr-5 text-black'>NextJs</Link>

        <Link href='/users' className='mr-1 text-black'>Users</Link>
        <Link href='/products' className='text-black'>| Products</Link>
    </div>
  )
}

export default NavBar