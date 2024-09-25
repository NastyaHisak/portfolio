import {useParams} from "react-router-dom";
import SampleSlider from '../components/cardSlider/SampleSlider';
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1 project-details__title">{project.title}</h1>

					<SampleSlider item={project}/>

					<div className="project-details__skills">
						<p><span>Технологии:</span> {project.skills.join(', ')}</p>
					</div>

					{project.description && (
						<div className="project-details__desc">
							<p><span>Описание:</span> {project.description}</p>
						</div>
					)}

					<div className="project-details__actions">
						{project.gitHubLink && (
							<BtnGitHub link={project.gitHubLink} />
						)}
						{project.link && (
							<a href={project.link} target="_blank" rel="noreferrer" className="btn-outline">
								Открыть в браузере
							</a>
						)}
					</div>

				</div>
			</div>
		</main>
	);
}

export default Project;
