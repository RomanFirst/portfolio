import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Roman | Front-End Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}
