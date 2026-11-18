"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';

import './style.css';
const Menu = dynamic(() => import('@/components/Menu'), { ssr: false });

function ButtonMenu() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return ( 
        <div>
            <button className="menu-hamburguer" type="button" aria-label="Open navigation menu" aria-haspopup="dialog" aria-expanded={isModalOpen} aria-controls={isModalOpen ? "navigation-dialog" : undefined} onClick={handleOpenModal}>
                <p aria-hidden="true">-</p>
                <p aria-hidden="true">-</p>
                <p aria-hidden="true">-</p>
            </button>
          {isModalOpen && <Menu isOpen={isModalOpen} onClose={handleCloseModal} />}
        </div>
    )
}

export default ButtonMenu;
