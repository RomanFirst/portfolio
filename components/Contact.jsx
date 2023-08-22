import { ValidationError, useForm } from '@formspree/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import contactImg from '../public/assets/contact.jpg'

const Contact = () => {
	const [state, handleSubmit] = useForm('meqbgkez')
	const [submitted, setSubmitted] = useState(false)

	const handleFormSubmit = e => {
		handleSubmit(e)
		if (state.succeeded) {
			setSubmitted(true)
		}
	}
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto py-16 px-2 w-full'>
				<p className='uppercase text-xl tracking-widest text-[#5651e5]'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<Image
								className='rounded-xl hover:scale-105 ease-in duration-300'
								src={contactImg}
								alt='/'
							/>
							<div>
								<h2 className='py-2'>Roman</h2>
								<p>Front-End Developer</p>
								<p className='py-4'>
									I am available for full-time positions. Contact me and let's
									talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8'>Connect With Me</p>
								<div className='flex  justify-between gap-4 py-4'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
										<Link href='https://www.linkedin.com/in/raman-asalkhanau/'>
											<FaLinkedinIn />
										</Link>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
										<Link href='https://github.com/RomanFirst?tab=repositories'>
											<FaGithub />
										</Link>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
										<Link href='mailto:raman.asalkhanau@onet.pl'>
											<AiOutlineMail />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							{submitted ? (
								<p className='text-green-500'>Form submitted successfully!</p>
							) : (
								<form onSubmit={handleFormSubmit}>
									<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
										<div className='flex flex-col'>
											<label className='uppercase text-sm py-2'>Name</label>
											<input
												className='border-2 rounded-lg p-3 flex border-gray-300'
												type='text'
											/>
										</div>
										<div className='flex flex-col'>
											<label className='uppercase text-sm py-2'>
												Phone Number
											</label>
											<input
												className='border-2 rounded-lg p-3 flex border-gray-300'
												type='text'
											/>
										</div>
									</div>
									<div className='flex flex-col py-2'>
										<label htmlFor='email' className='uppercase text-sm py-2'>
											Email
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											id='email'
											type='email'
											name='email'
										/>
										<ValidationError
											prefix='Email'
											field='email'
											errors={state.errors}
										/>
									</div>
									<div className='flex flex-col py-2'>
										<label className='uppercase text-sm py-2'>Message</label>
										<textarea
											className='border-2 rounded-lg p-3 border-gray-300'
											rows='10'
											id='message'
											name='message'
										/>
										<ValidationError
											prefix='Message'
											field='message'
											errors={state.errors}
										/>
									</div>
									<button
										className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white w-full p-4 text-gray-100 mt-4'
										type='submit'
									>
										Send Message
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
							<HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Contact
