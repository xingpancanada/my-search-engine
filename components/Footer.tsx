import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-xs text-gray-400 min-w-full'>
      <div className='px-8 py-3 border-b bg-gray-100'>
        <CountryLookup />
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center px-8 py-4 bg-gray-100'>
        <ul className='flex items-center space-x-3'>
          <li className='link'>About</li>
          <li className='link'>Adverstising</li>
          <li className='link'>Business</li>
          <li className='link'>How search works</li>
        </ul>
        <ul className='flex items-center space-x-3'>
          <li className='link'>Privacy</li>
          <li className='link'>Terms</li>
          <li className='link'>Settings</li>
        </ul>
      </div>
    </footer>
  )
}
