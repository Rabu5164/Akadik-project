import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-10 pb-5'>
      <div className='section-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-8 px-8'>

        {/* Logo and details */}
        <div className="md:col-span-2">
  <Link 
    to="/" 
    className="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200"
  >
    <img 
      src="/images/companylogo.png" 
      alt="Akadik Furniture logo"
      className="h-10 w-auto rounded-md object-cover"
    />
    <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
      Akadik Furniture
    </span>
  </Link>
  
  <p className="text-gray-600 dark:text-gray-300 md:max-w-sm leading-relaxed">
    The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
  </p>
</div>


        {/* Services */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Services</h2>
          <ul className='space-y-2'>
            <li><Link to="/" className='hover:text-primary'>Email Marketing</Link></li>
            <li><Link to="/" className='hover:text-primary'>Campaigns</Link></li>
            <li><Link to="/" className='hover:text-primary'>Branding</Link></li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Furniture</h2>
          <ul className='space-y-2'>
            <li><Link to="/" className='hover:text-primary'>Beds</Link></li>
            <li><Link to="/" className='hover:text-primary'>Chair</Link></li>
            <li><Link to="/" className='hover:text-primary'>All</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
          <div className='flex gap-4'>
           <ul className="space-y-2">
  <li>
    <Link to="/" className="flex items-center gap-2 hover:text-primary">
      <FaFacebookF /> <span>Facebook</span>
    </Link>
  </li>
  <li>
    <Link to="/" className="flex items-center gap-2 hover:text-primary">
      <FaTwitter /> <span>Twitter</span>
    </Link>
  </li>
  <li>
    <Link to="/" className="flex items-center gap-2 hover:text-primary">
      <FaInstagram /> <span>Instagram</span>
    </Link>
  </li>
  <li>
    <Link to="/" className="flex items-center gap-2 hover:text-primary">
      <FaLinkedinIn /> <span>Linkedin</span>
    </Link>
  </li>
</ul>

          </div>
        </div>

      </div>
      {/*CopyRight*/}
      <div className='mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-blck dark:bg-gray-800 dark:text-white border-top border-t border-gray-300 pt-4 '>
        <p>&copy; {new Date().getFullYear()} Akadik Furniture. All rights reserved.</p>

        <div className='flex items-center gap-4'>
           <Link to='/'>Terms & Conditins</Link> 
           <Link to='/'>Privacy Policy</Link> 
        </div>

      </div>
    </footer>
  )
}

export default Footer;
