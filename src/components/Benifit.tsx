
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    key:string
    title:string
    icon:ReactNode
    description:string
    setSelectedPage: (value: string) => void
}
const childVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible:{opacity:1, scale:1}
}
const Benifit = ({title,icon,description,setSelectedPage}:Props) => {
    return (
        <motion.div
            variants={childVariants}
            className='px-5 py-16 border-2 border-gray-100 rounded-md flex items-center justify-center gap-6 flex-col'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-300 p-2'> {icon}</div>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p >{description}</p>
            <AnchorLink
            href={`#contactus`}
            onClick={() => { setSelectedPage("contactus") }}
            className="text-lg text-primary-500 underline"
            ><p>Learn More</p>
            </AnchorLink>
        </motion.div>
    )
}

export default Benifit