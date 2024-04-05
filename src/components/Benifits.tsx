import { HomeModernIcon, UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid';
import {BenifitType} from '../types'
import { motion } from 'framer-motion'
import Benifit from './Benifit';
import BenefitsPageGraphic from '../assets/BenefitsPageGraphic.png'
import AbstractWaves from '../assets/AbstractWaves.png'
import Sparkles from '../assets/Sparkles.png'
type Props = {
    setSelectedPage: (value: string) => void
}
const benefits:Array<BenifitType>= [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];
const Benifits = ({setSelectedPage}:Props) => {
return (
    <motion.section
        className='bg-gray-20 flex justify-center items-center flex-col w-full gap-16 h-full py-16'
        id='benefits'
        onViewportEnter={() => {
        setSelectedPage("benefits")
            }}
    >
        <h1 className='text-2xl font-montserrat font-bold '>
            More Than Gyme
        </h1>
        <p className='text-center font-semibold w-5/6'>We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.</p>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration: 0.5 }}
        variants={{
            hidden: { },
            visible: {children:0.2}
        }}
        className='mt-10 w-5/6 flex justify-center items-center gap-16 flex-col md:flex-row '>
            {benefits.map((benifit: BenifitType) => {
                return <Benifit
                    key={benifit.title}
                    title={benifit.title}
                    icon={benifit.icon}
                    description={benifit.description}
                    setSelectedPage={setSelectedPage}
                />
            })}
        </motion.div>
        <div className='flex items-center justify-center gap-16 flex-col md:flex-row w-5/6 relative'>
            <motion.div
                initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{opacity:1,x:0}
                    }}
                className='w-2/4 relative p-2 '>
                <img className="mx-auto"
            alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}></img>
                <img src={AbstractWaves} alt="AbstractWaves"
                className='absolute bottom-50 right-2'></img>
            </motion.div>
            
            <div className='flex justify-center items-center gap-8 flex-col w-2/4 '>
                < motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible:{opacity:1,x:0}
                    }}
                    className='text-xl font-semibold font-montserrat'>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span></motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible:{opacity:1,x:0}
                    }}
                    className=' font-dmsans text-center text-lg' >
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.</motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible:{opacity:1,x:0}
                    }}
                    className='font-dmsans text-center text-lg'>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
                </motion.p>
                
                <button
            className='rounded-md py-1 bg-secondary-400 px-10 hover:bg-primary-500 h-[50px] z-10'
                onClick={() => { setSelectedPage("contactus") }}>
                Join Now
                </button>
                <img className='absolute bottom-0 left-0   ' src={Sparkles} alt="Sparkles"></img>
                
            </div>
        </div>
    </motion.section>
)
}

export default Benifits