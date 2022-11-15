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
				{(data as ProjectData[]).map(function (
					{
						fromTo,
						name,
						company,
						role,
						description,
						imageLink,
						linkTo,
						linkText,
					},
					idx
				) {
					return (
						<ProjectCard
							key={idx}
							name={name}
							company={company}
							description={description}
							imageLink={imageLink}
							role={role}
							linkText={linkText === '' ? 'Visit the company`s page' : linkText}
							linkTo={linkTo}
							fromTo={fromTo}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default Home;
