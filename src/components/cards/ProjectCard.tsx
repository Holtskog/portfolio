import React from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';
import ProjectData from '../../dataModels/ProjectData';
import './ProjectCard.css';

const getImage = (link: string) => {
	if (link === 'github') {
		return <FaGithub className='project-icon text-light' />;
	} else if (link === '') {
		return <FaCode className='project-icon text-light' />;
	}
	return <img src={link} alt='company logo' className='company-icon' />;
};

function ProjectCard(props: ProjectData) {
	return (
		<div className='bg-card card'>
			<div className='card__headers'>
				<h2 className='card-title text-light'>{props.name}</h2>
				{getImage(props.imageLink)}
				<h3 className='company-title text-light'>
					{props.company}
					<br />
					{props.role}
				</h3>
				<h4 className='role-title text-light'></h4>
			</div>
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
