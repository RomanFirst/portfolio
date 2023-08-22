import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
const NavBar = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])
	return (
		<div
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100]'
					: 'fixed w-full h-20  z-[100]'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						src='/../assets/NavLogo.png'
						alt='/'
						width='80'
						height='40'
						className='cursor-pointer'
					/>
				</Link>
				<div>
					<ul className='hidden md:flex mr-2'>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/'>Home</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#about'>About</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#skills'>Skills</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#projects'>Projects</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/resume'>Resume</Link>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b'>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div className='flex w-full items-center justify-between'>
						<div>
							<Image
								src='/../assets/navLogo.png'
								width='80'
								height='30'
								alt=''
							/>
						</div>
						<div
							onClick={handleNav}
							className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
						>
							<AiOutlineClose size='20' />
						</div>
					</div>
					<div className='border-b border-gray-300 my-4'>
						<p className='w-[85%] md:w-[90%] py-4'>
							Let's build something legendary together
						</p>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Resume
								</li>
							</Link>
							<Link href='/#contact'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-[40px]'>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let's Connect
							</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[88%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedinIn />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
