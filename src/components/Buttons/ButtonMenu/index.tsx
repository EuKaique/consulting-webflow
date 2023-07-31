"use client"

import { useState } from 'react';

import './style.css';
import Menu from '@/components/Modals/Menu';

function ButtonMenu() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return ( 
        <>
          <div>
              <button className="menu-hamburguer" onClick={handleOpenModal}>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
              </button>
          </div>
            <Menu isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    )
}

export default ButtonMenu;