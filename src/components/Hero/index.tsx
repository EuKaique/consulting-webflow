import Image from 'next/image'
import HeroImage from '../../assets/jpeg/Hero.jpg'

import './style.css'

export const Hero = () => {
    return (
        <div>
            <div className="absolute hero-info">
                <p className="text-base font-semibold text-white">
                    <span>🟩</span>Welcome to Whitecollar
                </p>
                <h1 className="text-5xl text-white py-5 font-bold">Style Guide</h1>
                <span className='text-slate-400 pt-2'>
                    Collaboratively administrate empowered markets plug <br />
                    and play networks dynamically procrastinated
                </span>
            </div>
            <Image src={HeroImage} alt="Bem-vindo" />
        </div>
    )
}