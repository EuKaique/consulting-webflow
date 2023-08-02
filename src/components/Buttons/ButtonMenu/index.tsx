"use client"

import { useState } from 'react';

import './style.css';
import Menu from '@/components/Menu';

function ButtonMenu(router: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return ( 
        <div>
            <button className="menu-hamburguer" onClick={handleOpenModal}>
                <p>-</p>
                <p>-</p>
                <p>-</p>
            </button>
          <Menu isOpen={isModalOpen} onClose={handleCloseModal} router={router}/>
        </div>
    )
}

export default ButtonMenu;