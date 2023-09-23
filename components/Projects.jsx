import ProjectItem from '../components/ProjectItem'
import chatImg from '../public/assets/projects/chat.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
import quizImg from '../public/assets/projects/quiz.png'
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
						title='Portfolio UX/UI'
						backgroundImg={portfolioImg}
						projectUrl='https://portfolio-ux-ui.vercel.app/'
						technologies='HTML/CSS/JS'
					/>
					<ProjectItem
						title='Garage 103'
						backgroundImg={stoImg}
						projectUrl='https://sto-103-tau.vercel.app/'
						technologies='React/TypeScript'
					/>
					<ProjectItem
						title='Quiz App'
						backgroundImg={quizImg}
						projectUrl='https://quiz-three-mu.vercel.app/'
						technologies='React/Redux'
					/>
					<ProjectItem
						title='ChatApp'
						backgroundImg={chatImg}
						projectUrl='https://chat-liard-gamma.vercel.app'
						technologies='React/Tailwind/Firebase'
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
