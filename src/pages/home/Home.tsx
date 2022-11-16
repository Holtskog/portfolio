import ProjectCard from '../../components/cards/ProjectCard';
import ProjectData from '../../dataModels/ProjectData';
import useFetch from '../../hooks/useFetch';
import './Home.css';

function Home() {
	const url = document.baseURI.includes('github.io')
		? 'https://holtskog.azurewebsites.net/project'
		: 'https://localhost:7119/project';
	const [data, loading] = useFetch<ProjectData>(url, true);
	if (loading) {
		return (
			<div className='loading text-light'>
				<h1>Loading projects...</h1>
			</div>
		);
	}
	return (
		<div className='home'>
			<section className='projects bg-dark'>
				{(data as ProjectData[]).map((projectData, idx) => {
					return <ProjectCard key={projectData.fromTo} data={projectData} />;
				})}
			</section>
		</div>
	);
}

export default Home;
