import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, skills, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
				{skills && (
				<p className="project-card__skills">
					{skills.map((skill, index) => (
						<span key={index} className="project-card__skill">
                {skill}
            </span>
					))}
				</p>
				)}
			</li>
		</NavLink>
	);
};

export default Project;
