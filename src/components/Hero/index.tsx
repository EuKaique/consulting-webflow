import Image from 'next/image'
import HeroImage from '../../assets/jpeg/Hero.jpg'

import './style.css'

type Props = {
    page: string,
    title: string,
    text?: string,
    image: any,
    height: string,
}

export const Hero = (props: Props) => {
    return (
        <div>
            <div className="absolute hero-info" style={{ height: props.height}}>
                <p className="text-base font-semibold text-white">
                    <span>🟩</span>{props.page}
                </p>
                <h1 className="text-5xl text-white py-5 font-bold">{props.title}</h1>
                <span className='text-slate-400 pt-2'>
                    Collaboratively administrate empowered markets plug <br />
                    and play networks dynamically procrastinated
                </span>
            </div>
            <Image src={props.image} alt={props.page} />
        </div>
    )
}