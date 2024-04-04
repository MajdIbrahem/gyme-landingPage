import HomePageText from '../assets/HomePageText.png'
import HomePageGraphic from '../assets/HomePageGraphic.png'
import SponsorRedBull from '../assets/SponsorRedBull.png'
import SponsorForbes from '../assets/SponsorForbes.png'
import SponsorFortune from '../assets/SponsorFortune.png'
import EvolveText from '../assets/EvolveText.png'


import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
type Props = {
    setSelectedPage: (value: string) => void
}
const Home = ({setSelectedPage}:Props) => {
  return (
    <section
      id='home'
      className='bg-gray-20 flex justify-center items-center flex-col w-full gap-16 h-full py-16'>
      <motion.div
        onViewportEnter={() => {
        setSelectedPage("home")
      }}
        className='mt-10 w-5/6 flex justify-center items-center gap-16 flex-col md:flex-row h-5/6 relative'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible:{opacity:1,x:0}
          }}
          className='flex justify-center items-center gap-10 flex-col w-2/4  '>
          <img className='absolute z-10 top-3 w-[600px] hidden md:block opacity-20' src={EvolveText} alt='EvolveText'></img>
          <img src={HomePageText} alt="HomePageText"></img>
          <p className='text-xl font-semibold'>Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
          <motion.div
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible:{opacity:1,x:0}
          }}
            className='w-full flex items-center justify-center gap-10'>
          <button
            className='rounded-md py-1 bg-secondary-400 px-10 hover:bg-primary-500 h-[50px]'
              onClick={() => { setSelectedPage("contactus") }}>
              Join Now
            </button>
            <AnchorLink
              href={`#contactus`}
              onClick={() => { setSelectedPage("contactus") }}
              className="text-lg text-primary-500 underline inline"
            ><p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </motion.div>
        <div>
          <img src={HomePageGraphic} alt='HomePageGraphic'></img>
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => {
        setSelectedPage("home")
      }}
        className='flex justify-center items-center w-full h-[150px] gap-16 bg-primary-100 shadow-lg'>
        <img src={SponsorRedBull} alt="SponsorRedBull"></img>
        <img src={SponsorForbes} alt="SponsorForbes"></img>
        <img src={SponsorFortune} alt="SponsorFortune"></img>
      </motion.div>
    </section>
  )
}

export default Home