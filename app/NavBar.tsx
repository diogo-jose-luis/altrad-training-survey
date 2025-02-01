import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 p-5 text-dark'>
        <Link href='/' className='mr-5'>NextJs</Link>

        <Link href='/users' className=''>Users</Link>
        <Link href='/products' className=''>Products</Link>
    </div>
  )
}

export default NavBar