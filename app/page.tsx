import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <hr></hr>
      <Link href="/users">departamentos</Link>
      <hr></hr>
      <ProductCard />
    </main>
  )
}
