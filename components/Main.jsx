import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
	return (
		<div id='main' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I'm <span className='text-[#5651e5]'>Roman</span>
					</h1>
					<h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
					<p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
						I’m focused on building responsive front-end web applications
						integrating back-end technologies.
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
	)
}

export default Main
