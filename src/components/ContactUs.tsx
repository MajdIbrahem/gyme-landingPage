import {useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '../assets/ContactUsPageGraphic.png'
import { triggerAsyncId } from 'async_hooks'
type Props = {
    setSelectedPage: (value: string) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,trigger,formState:{errors}
    }=useForm()
    const onSubmitHandler = async(e:any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    const inputStyle=`w-full rounded-lg bg-primary-500 placeholder-white px-5 py-3`
    return (
        <section
            className='bg-gray-20 flex justify-center items-center flex-col w-full gap-16 h-full py-16'
            id='contactus'>
            <motion.div className='w-5/6'
                onViewportEnter={() => {
                    setSelectedPage("contactus")
                }}
            >
                <motion.div
                    className='flex items-center justify-center flex-col gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className='text-2xl font-montserrat font-bold '><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</h1>
                    <p className="text-center font-semibold">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>
                <motion.div
                className='flex items-center justify-center flex-col gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1,y: 0 }
                    }}
                >
                    <form
                        className='flex justify-center items-center gap-8 flex-col mt-8'
                        target='_blank'
                        onSubmit={onSubmitHandler}
                        action="https://formsubmit/co/majdibrahem22400@gmail.com"
                        method="POST"
                    >
                        <input
                                className={inputStyle}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                required: true,
                                maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" &&
                                    "Max length is 100 char."}
                                </p>
                            )}

                        <input
                            className={inputStyle}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" &&
                                    "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                        )}
                        <textarea
                            className={inputStyle}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                            required: true,
                            maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                            SUBMIT
                        </button>
                    </form>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                        <img
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={ContactUsPageGraphic}
                        />
                        </div>
            </motion.div>
                </motion.div>
            </motion.div>
            </section>
    )
}

export default ContactUs