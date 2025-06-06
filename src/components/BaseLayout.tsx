import '@/styles/globals.css'
import { Metadata } from 'next'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import React from 'react'

import Topbar from './Topbar'

interface BaseLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Teacher AId',
  description: 'AI help to create lesson plans',
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="mx-10 min-h-screen">
      <Topbar />
      <main>{children}</main>
      <footer>{/* TBD */}</footer>
    </div>
  )
}

export default BaseLayout
