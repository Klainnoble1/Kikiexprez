'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-navy-blue">KIKIEXPREZ</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-red-accent font-medium transition">HOME</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-accent font-medium transition">ABOUT US</Link>
            <Link href="/services" className="text-gray-700 hover:text-red-accent font-medium transition">OUR SERVICES</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-accent font-medium transition">CONTACT</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy-blue"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <Link href="/" className="text-gray-700 hover:text-red-accent font-medium transition">HOME</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-accent font-medium transition">ABOUT US</Link>
            <Link href="/services" className="text-gray-700 hover:text-red-accent font-medium transition">OUR SERVICES</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-accent font-medium transition">CONTACT</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
