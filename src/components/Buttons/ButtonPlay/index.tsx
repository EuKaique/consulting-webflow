"use client"

import Image from 'next/image';
import { useState } from 'react';

import VideoModal from '../../Modals/Video';

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
            <button onClick={handleOpenModal}><Image src={PlayIcon} alt="Play"/></button>
            <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    )
}

export default ButtonPlay;