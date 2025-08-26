import Dashboard from '@/components/Dashboard/Dashboard'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Morning Dashboard</title>
        <meta name="description" content="Your personalized dashboard" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-[#0d0d2b]">
        <Dashboard />
      </main>
    </>
  )
}