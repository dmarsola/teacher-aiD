'use client'

import Link from 'next/link'

// import { Button } from 'primereact/button';
// import { Sidebar } from 'primereact/sidebar';

export default function Topbar() {
  // TODO: make this more mobile friendly
  // TODO: add a hamburger menu
  // TODO: have a prop to disable the href for the current page
  // const [visible, setVisible] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Teacher aiD
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600 transition">
              {item.label}
            </Link>
          ))}
          {/* <Button label="Login" className="p-button-sm p-button-outlined" /> */}
        </nav>

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setVisible(true)}
          className="md:hidden text-gray-600"
        >
          <Menu size={24} /> 
          <p>Menu goes here</p>
        </button>
        */}
      </header>

      {/* Mobile Sidebar */}
      {/* <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="w-64"
      >
        <div className="flex flex-col gap-4 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setVisible(false)}
              className="text-lg text-gray-800 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <Button label="Login" className="mt-4 p-button-outlined" />
        </div>
      </Sidebar> */}
    </>
  )
}
