import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import './globals.css'


function layout({ children }) {
  return (
    <html lang='en'>
      <body style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: '1' }}>
          {children}
        </main>
      </body>
    </html>
  )
}

export default layout
