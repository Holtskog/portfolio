import { useEffect, useState } from 'react';
import ProjectCard from '../../components/cards/ProjectCard';
import ProjectData from '../../dataModels/ProjectData';
import useFetch from '../../hooks/useFetch';
import './Home.css';

function Home() {
	// const [projectData, setProjectData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const url = document.baseURI.includes('github.io')
	// 			? 'https://holtskog-api.azurewebsites.net/project'
	// 			: 'https://localhost:7119/project';
	// 		const response = await fetch(url, {
	// 			method: 'GET',
	// 			headers: {
	// 				Accept: 'application/json',
	// 			},
	// 		})
	// 			.then((response) => {
	// 				console.log(response);
	// 				if (response.status === 400) return [];
	// 				return response.json();
	// 			})
	// 			.then((res) => {
	// 				console.log('Got data: ', res);
	// 				setProjectData(res.reverse());
	// 			})
	// 			.catch((error) => console.log('Error getting data from api', error));
	// 	};

	// 	fetchData();
	// }, []);
	const url = document.baseURI.includes('github.io')
		? 'https://holtskog.azurewebsites.net/project'
		: 'https://localhost:7119/project';
	const [data] = useFetch<ProjectData>(url);
	return (
		<div className='home'>
			<section className='projects bg-dark'>
				{(data as ProjectData[]).map(
					({
						fromTo,
						name,
						company,
						role,
						description,
						imageLink,
						linkTo,
						linkText,
					}) => (
						<ProjectCard
							key={fromTo}
							name={name}
							company={company}
							description={description}
							imageLink={imageLink}
							role={role}
							linkText={linkText === '' ? 'Visit the company`s page' : linkText}
							linkTo={linkTo}
							fromTo={fromTo}
						/>
					)
				)}
			</section>
		</div>
	);
}

export default Home;
