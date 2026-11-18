"use client"

import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const VideoModal = dynamic(() => import('../../Modals/Video'), { ssr: false });

import PlayIcon from '../../../assets/svg/icons/play.svg';

import './style.css';

function ButtonPlay() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return ( 
        <>
            <button type="button" aria-label="Open presentation" aria-haspopup="dialog" aria-expanded={isModalOpen} onClick={handleOpenModal}><Image src={PlayIcon} alt=""/></button>
            {isModalOpen && <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </>
    )
}

export default ButtonPlay;
