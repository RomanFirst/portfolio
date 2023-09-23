import Image from 'next/image'

const Skills = () => {
	return (
		<div id='skills' className='w-full lg:h-screen p-2'>
			<div className='flex flex-col max-w-[1240px] mx-auto justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Skills
				</p>
				<h2 className='py-4'>What I Can Do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/html.png'
									width='64'
									height='64'
									alt='html'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/css.png'
									width='64'
									height='64'
									alt='css'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/javascript.png'
									width='64'
									height='64'
									alt='JS'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/react.png'
									width='64'
									height='64'
									alt='react'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>React</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/tailwind.png'
									width='64'
									height='64'
									alt='tailwind'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/firebase.png'
									width='64'
									height='64'
									alt='firebase'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>Firebase</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/github.png'
									width='64'
									height='64'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>GitHub</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/typescript.png'
									width='64'
									height='64'
									alt='typescript'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>Typescript</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/redux.png'
									width='64'
									height='64'
									alt='Redux'
								/>
							</div>
							<div className='flex flex-col items-center justify center'>
								<h3>Redux</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
