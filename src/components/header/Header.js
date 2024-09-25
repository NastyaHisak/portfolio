import "./style.css";

import avatar from './../../img/icons/avatar.jpeg';
import CV from './../../img/Гисак Анастасия frontend-разработчик.pdf';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header-img" style={{backgroundImage: `url(${avatar})`}}>
                </div>
                <div className="header-content">
                    <div className="header-about">
                        <div className="header__title title-2">О себе</div>
                        <div className="header-about__text"><strong>Hello world!</strong> Меня зовут Анастасия, я – Frontend-разработчик. <br/>
                            Занимаюсь разработкой веб-сайтов.
                            Имею опыт в создании одностраничных и многостраничных сайтов, веб-приложений,
                            интернет-магазина. А вот и <NavLink to="/projects" className="header-examples"> примеры моих работ</NavLink>.
                            Постоянно изучаю новые технологии,
                            берусь за интересные и сложные задачи. <br/>
                            Буду рада новым знакомствам и сотрудничеству!
                        </div>
                    </div>
                    <div className="header-bottom">
                        <ul className="header-bottom__list">
                            <li className="header-bottom__item">
                                <strong>Номер телефона:</strong> <a href="tel:+375333941544">+375 (33) 394-15-44</a>
                            </li>
                            <li className="header-bottom__item">
                                <strong>Telegram:</strong> <a href="https://t.me/Nastya_Hisak">@Nastya_Hisak</a>
                            </li>
                            <li className="header-bottom__item">
                                <strong>E-mail:</strong> <a
                                href="mailto:hisak.nastya@gmail.com">hisak.nastya@gmail.com</a>
                            </li>
                            <li className="header-bottom__item">
                                <strong>Регион:</strong> Беларусь, Минск
                            </li>
                            <li className="header-bottom__item">
                                <strong>Образование:</strong> высшее
                            </li>
                        </ul>
                    </div>
                    <a href={CV} target="_blank" rel="noreferrer" className="btn header-btn">
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
