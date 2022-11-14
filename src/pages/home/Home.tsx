import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/cards/ProjectCard';
import './Home.css';

function Home() {
	// var projects = [
	// 	{
	// 		name: 'Project 1',
	// 		company: 'Company 1',
	// 		role: 'Fullstack',
	// 		description:
	// 			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
	// 		imageLink: '',
	// 		linkTo: 'https://www.voca.no',
	// 		linkText: '',
	// 	},
	// 	{
	// 		name: 'Project 2',
	// 		company: 'Company 2',
	// 		role: 'Backend',
	// 		description:
	// 			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
	// 		imageLink:
	// 			'https://www.effera.no/wp-content/uploads/2020/03/Logo-negativ@2x.png',
	// 		linkTo: 'https://www.effera.no',
	// 		linkText: '',
	// 	},
	// 	{
	// 		name: 'Project 3',
	// 		company: 'Company 3',
	// 		role: 'System Developer',
	// 		description:
	// 			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
	// 		imageLink:
	// 			'http://www.rebartek.no/wp-content/uploads/2020/11/transparentLogo-1.png',
	// 		linkTo: 'https://www.rebartek.no',
	// 		linkText: '',
	// 	},
	// 	{
	// 		name: 'Project 4',
	// 		company: 'Company 4',
	// 		role: 'System Developer',
	// 		description:
	// 			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
	// 		imageLink:
	// 			'https://www.applicarobot.no/wp-content/uploads/sites/7/2022/01/favicon.png',
	// 		linkTo: 'https://www.applicarobot.no/',
	// 		linkText: '',
	// 	},
	// 	{
	// 		name: 'Project 5',
	// 		company: 'Personal',
	// 		role: 'Fullstack',
	// 		description:
	// 			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
	// 		imageLink: 'github',
	// 		linkTo: 'https://github.com/Holtskog/portfolio',
	// 		linkText: 'View on GitHub',
	// 	},
	// ];

	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const url = document.baseURI.includes('github.io')
				? 'https://holtskog-api.azurewebsites.net/project'
				: 'https://localhost:7119/project';
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			})
				.then((response) => {
					console.log(response);
					if (response.status === 400) return [];
					return response.json();
				})
				.then((res) => {
					console.log('Got data: ', res);
					setProjectData(res.reverse());
				})
				.catch((error) => console.log('Error getting data from api', error));
		};

		fetchData();
	}, []);
	return (
		<div className='home'>
			<section className='projects bg-dark'>
				{projectData.map(
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
						/>
					)
				)}
			</section>
		</div>
	);
}

export default Home;
