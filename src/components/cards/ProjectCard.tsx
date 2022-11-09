import React from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';
import './ProjectCard.css';

interface ProjectData {
	name: string;
	role: string;
	company: string;
	description: string;
	imageLink: string;
	linkTo: string;
	linkText: string;
	key: string;
}

const getImage = (link: string) => {
	console.log(link);
	if (link === 'github') {
		return <FaGithub className='project-icon text-light' />;
	}
	return link === '' ? (
		<FaCode className='project-icon text-light' />
	) : (
		<img src={link} alt='company logo' className='company-icon' />
	);
};

function ProjectCard(props: ProjectData) {
	return (
		<div className='bg-card card'>
			<h2 className='card-title text-light'>{props.name}</h2>
			{getImage(props.imageLink)}
			<h3 className='company-title text-light'>{props.company}</h3>
			<h4 className='role-title text-light'>{props.role}</h4>
			<p className='card-description text-light'>{props.description}</p>
			<a
				href={props.linkTo}
				target='_blank'
				className='project-link text-light'
			>
				{props.linkText} &#8594;
			</a>
		</div>
	);
}

export default ProjectCard;
