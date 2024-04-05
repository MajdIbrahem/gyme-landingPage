import { useEffect, useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import Link from './Link';

type Props = {
    selectedPage: string
    setSelectedPage: (value: string) => void
}
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isMenueToggeled, setIsMenueToggeld] = useState<boolean>(false)
    const [isTop,setIsTop]=useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 10 ? setIsTop(false):setIsTop(true)
        })
    }, [])
    return (
        <nav>
            <div className={` ${isTop===true? "bg-gray-20" :"bg-primary-100  shadow-lg rounded-b-sm"} flex items-center justify-between fixed top-0 z-20 w-full py-6`}>
                <div className='flex items-center justify-between mx-auto w-5/6 relative'>
                    <div className='flex items-center justify-between w-full gap-16 '>
                        <img src={Logo} alt={`logo`}></img>
                        <div className='items-center justify-between w-full hidden sm:flex'>
                            <div className='flex items-center justify-between gap-8'>
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
                                <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Contact us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div className='flex items-center justify-between gap-8'>
                                
                                <button
                                    className='rounded-md py-2 bg-secondary-400 px-10 hover:bg-primary-500'
                                    onClick={() => { setSelectedPage("contactus") }}>Become a Member</button>
                            </div>
                        </div>
                        <button
                            onClick={()=>{setIsMenueToggeld(true)}}
                            className='rounded-full bg-secondary-500 p-2 sm:hidden block '>
                            <Bars3Icon className='w-6 h-6 text-white'></Bars3Icon>
                        </button>
                        <div className={`${isMenueToggeled === true ? "flex" : "hidden"} duration-300 justify-center items-start fixed z-20 top-0 right-0 w-[300px] h-full bg-primary-300 py-20 shadow-lg `}>
                            <div className='flex items-center flex-col justify-start gap-6 text-2xl '>
                                <button className=' absolute top-5 right-5 p-2'
                                onClick={()=>{setIsMenueToggeld(false)}}>
                                <XMarkIcon className='w-6 h-6 text-gray-400'></XMarkIcon>
                                </button>
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
                                <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Contact us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar