'use client'
import Sidebar from '@/components/sidebar/Sidebar'
import React, { useEffect } from 'react'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import ReactQueryProvider from '@/components/QueryProvider/QueryProvider'
import { AuthProvider } from '@/context/authContext'

function layout({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <html lang='en'>
      <body style={{ display: 'flex' }}>
        <ReactQueryProvider >
          <AuthProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <Sidebar />
            <div className='mainContainer' style={{ flex: '1',height:'100vh',overflow:'auto'  }}>
              <main style={{ flex: '1', margin: '30px'}}>
                {children}
              </main>
            </div>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html >
  )
}

export default layout
