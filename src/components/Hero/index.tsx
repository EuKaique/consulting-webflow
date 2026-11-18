import Image from 'next/image'

import './style.css'

type Props = {
    page: string,
    title: string,
    text: boolean,
    image: any,
    height: string,
    width?: string
}

export const Hero = (props: Props) => {
    return (
        <div className='flex hero-class'>
            <div className="hero-info">
                <p className="text-base font-semibold text-white">
                    <span>🟩</span>{props.page}
                </p>
                <h1 className="text-5xl text-white py-5 font-bold">{props.title}</h1>
                {props.text && (
                    <span className='text-slate-400 pt-2 text-class'>
                        Collaboratively administrate empowered markets plug <br />
                        and play networks dynamically procrastinated
                    </span>
                )}
            </div>
            <div className='image-class'>
                <Image className="h-image" src={props.image} alt={props.page} fill sizes="100vw" priority />
            </div>
        </div>
    )
}