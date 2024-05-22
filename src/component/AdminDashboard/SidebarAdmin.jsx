"use client"
import React, { useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Menu } from 'lucide-react'
import { MdDashboard } from "react-icons/md";


export function SidebarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lg:hidden flex justify-between items-center bg-gray-800 p-4">
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <aside className={`flex h-screen w-64 flex-col overflow-y-auto border-r bg-gray-800 px-5 py-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <a href="#" className="hidden lg:block">
          <MdDashboard  className="h-10 w-10 text-white" aria-hidden="true" />
        </a>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Analytics</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <Wallet className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Sales</span>
              </a>
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Content</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <Newspaper className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Blogs</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <BellRing className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Notifications</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <Paperclip className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Checklists</span>
              </a>
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <Brush className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Themes</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Setting</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
