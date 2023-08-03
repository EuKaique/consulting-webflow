"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from '../../assets/png/arrow.png';

import './style.css';

export const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)

    const handleScroll = () => {
      setShowButton(window.scrollY > 200)
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {showButton && (
                <button className="btn-top-class" onClick={scrollToTop}>
                    <Image src={Arrow} alt="Go to top" />
                </button>
            )}
        </>

    );
}