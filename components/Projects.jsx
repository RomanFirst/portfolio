import ProjectItem from '../components/ProjectItem'
import portfolioImg from '../public/assets/projects/portfolio.png'
import shopImg from '../public/assets/projects/shop.png'
import stoImg from '../public/assets/projects/sto-103.png'
const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Projects
				</p>
				<h2 className='py-4'>What I've Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Garage 103'
						backgroundImg={stoImg}
						projectUrl='https://sto-103-tau.vercel.app/'
						technologies='React/TypeScript'
					/>
					<ProjectItem
						title='Portfolio UX/UI'
						backgroundImg={portfolioImg}
						projectUrl='https://portfolio-ux-ui.vercel.app/'
						technologies='HTML/CSS/JS'
					/>
					<ProjectItem
						title='Home Familia'
						backgroundImg={shopImg}
						projectUrl='https://sto-103-tau.vercel.app/'
						technologies='React/TypeScript'
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
