"use client"

import Link from 'next/link';
import Modal from 'react-modal';

import './style.css';

const Menu = ({ isOpen, onClose }: any) => {
  let currentPage:any = window.location.href.split('/')[3];

  let pages = ['', 'about-us','projects', 'team',
      'faq', 'services', 'blog', 'contact-us',
      'price', 'single', 'licenses'
  ]

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal do menu"
      className="menu-modal"
    >
      <div className='button-class'>
        <button onClick={onClose}>X</button>
      </div>
      <ul className='flex flex-col items-center leading-loose'>
        <li className={currentPage === '' ? 'active' : ''}>
          {currentPage === ''}
          <Link href='/'>Home</Link>
        </li>
        <li className={currentPage === 'about-us' ? 'active' : ''}>
          <Link href='/about-us'>About Us</Link>
        </li>
        <li className={currentPage === 'projects' ? 'active' : ''}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={currentPage === 'team' ? 'active' : ''}>
          <Link href='/team'>Team</Link>
        </li>
        <li className={currentPage === 'faq' ? 'active' : ''}>
          <Link href='/faq'>FAQ</Link>
        </li>
        <li className={currentPage === 'our-services' ? 'active' : ''}>
          <Link href='/our-services'>Services</Link>
        </li>
        <li className={currentPage === 'blog' ? 'active' : ''}>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className={currentPage === 'contact-us' ? 'active' : ''}>
          <Link href='/contact-us'>Contact Us</Link>
        </li>
        <li className={currentPage === 'price' ? 'active' : ''}>
          <Link href='/price'>Get Consulting</Link>
        </li>
        <li className={currentPage === 'single' ? 'active' : ''}>
          <Link href='/single'>Bussiness Management</Link>
        </li>
        <li className={currentPage === 'licenses' ? 'active' : ''}>
          <Link href='/licenses'>Licenses</Link>
        </li>
        <li className={currentPage === 'not-found' ? 'active' : ''}>
          <Link href='/not-found'>404 Page</Link>
        </li>
      </ul>
    </Modal>
  );
};

export default Menu;