import "./style.css";

import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';
import telegram from './../../img/icons/telegram.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://t.me/Nastya_Hisak" target="_blank" rel="noreferrer">
								<img src={telegram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/NastyaHisak" target="_blank" rel="noreferrer">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/anastasia-hisak-55b6472b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="footer-text">
						<a href="tel:+375333941544">+375 (33) 394-15-44</a>
						<a href="mailto:hisak.nastya@gmail.com">hisak.nastya@gmail.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
