import React from 'react';
import ProjectCard from '../../cards/ProjectCard';
import './Home.css';

function Home() {
	var projects = [
		{
			name: 'Project 1',
			company: 'company 1',
			role: 'Fullstack',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
			imageLink: '',
			linkTo: 'https://www.voca.no',
			linkText: '',
		},
		{
			name: 'Project 2',
			company: 'Company 2',
			role: 'Backend',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
			imageLink:
				'https://www.effera.no/wp-content/uploads/2020/03/Logo-negativ@2x.png',
			linkTo: 'https://www.effera.no',
			linkText: '',
		},
		{
			name: 'Project 3',
			company: 'company 3',
			role: 'System Developer',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
			imageLink:
				'http://www.rebartek.no/wp-content/uploads/2020/11/transparentLogo-1.png',
			linkTo: 'https://www.rebartek.no',
			linkText: '',
		},
		{
			name: 'Project 4',
			company: 'Company 4',
			role: 'System Developer',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
			imageLink:
				'https://www.applicarobot.no/wp-content/uploads/sites/7/2022/01/favicon.png',
			linkTo: 'https://www.applicarobot.no/',
			linkText: '',
		},
		{
			name: 'Project 5',
			company: 'Personal',
			role: 'Fullstack',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia laboriosam? Repellendus placeat beatae fugit dicta vel in accusantium recusandae aspernatur nulla, alias ratione corporis animi odit dolores?',
			imageLink: 'github',
			linkTo: 'https://github.com/Holtskog/portfolio',
			linkText: 'View on GitHub',
		},
	];
	return (
		<div className='home'>
			<section className='projects bg-dark'>
				{projects.map(
					({
						name,
						company,
						role,
						description,
						imageLink,
						linkTo,
						linkText,
					}) => (
						<ProjectCard
							key={name}
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
