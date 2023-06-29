import Image from 'next/image'
import Header from './layout/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
     <h1>Olá NextJs</h1>
    </main>
  )
}
