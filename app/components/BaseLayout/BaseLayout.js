import Footer from '@/app/footer'
import Header from '@/app/header'
import React from 'react'

export default function BaseLayout({children}) {
  return (
    <div className='w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
