"use client";

import { usePathname } from 'next/navigation';
import Modal from 'react-modal';
import NavigationLink from '../NavigationLink';
import './style.css';

const pages = [
  ['/', 'Home'], ['/about-us', 'About us'], ['/projects', 'Projects'],
  ['/team', 'Team'], ['/faq', 'FAQ'], ['/our-services', 'Services'],
  ['/blog', 'Insights'], ['/contact-us', 'Contact us'], ['/price', 'Explore plans'],
  ['/single', 'Business management'], ['/licenses', 'Licenses'],
];

export default function Menu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <Modal appElement={typeof document === 'undefined' ? undefined : document.getElementById('site-content') || undefined} aria={{ modal: true }} id="navigation-dialog" isOpen={isOpen} onRequestClose={onClose} contentLabel="Navigation menu" className="menu-modal">
      <div className="button-class"><button type="button" onClick={onClose} aria-label="Close navigation menu">×</button></div>
      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col items-center leading-loose">
          {pages.map(([href, label]) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
            return <li key={href} className={active ? 'active' : undefined}><NavigationLink href={href} onClick={onClose}>{label}</NavigationLink></li>;
          })}
        </ul>
      </nav>
    </Modal>
  );
}
