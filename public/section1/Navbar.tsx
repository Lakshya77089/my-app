'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/navbar/Logo.png"
            alt="BFM Academy"
            width={120}
            height={32}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-200 text-sm">
          <li>
            <Link href="/courses" className="hover:text-white">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/hackathons" className="hover:text-white">
              Hackathons
            </Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Bell icon */}
          <button
            aria-label="Notifications"
            className="relative p-2 text-gray-300 hover:text-white"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Avatar */}
          <Link href="/profile" className="p-1 hover:text-white">
            <Image
              src="/navbar/Avatar.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-gray-900 rounded-b-xl mx-4 mt-2 px-6 py-4`}
      >
        <ul className="flex flex-col space-y-4 text-gray-200 text-base">
          <li>
            <Link href="/courses" onClick={() => setIsOpen(false)} className="hover:text-white">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/hackathons" onClick={() => setIsOpen(false)} className="hover:text-white">
              Hackathons
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
