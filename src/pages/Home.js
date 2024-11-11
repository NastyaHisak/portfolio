import Header from './../components/header/Header'

const Home = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="experience">
                        <h2 className="title-2 experience-title">Опыт работы</h2>
                        <div className="experience-list">
                            <div className="experience-date">сентябрь 2024 – <br/>
                                наст. время</div>
                            <div className="experience-info">
                                <div className="experience-position"><span>Frontend-разработчик</span></div>
                                <div className="experience-company"><span>ModernMarket</span> (площадка международной торговли для юридических лиц)</div>
                                <div className="experience-duties">Обязанности: <br/>
                                    <ul className="skills-list">
                                        <li>Реализация пользовательских интерфейсов, обеспечение корректного отображения
                                            интерфейса на различных устройствах.</li>
                                        <li>Создание компонентов с использованием React.</li>
                                        <li>Интеграция с API. Использование fetch и кастомных хуков для получения данных с
                                            серверной части и их отображения на фронтенде.</li>
                                        <li>Работа с маршрутизацией в Next.js.</li>
                                        <li>Работа с Git.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills">
                        <h2 className="title-2 skills-title">Ключевые навыки и компетенции</h2>
                        <ul className="skills-list">
                            <li>Верстка страниц любой сложности на <span>HTML, CSS</span> по дизайн-макетам <span>Photoshop, Figma</span></li>
                            <li>Отличные знания <span>LESS/SASS, NPM, Webpack, jQuery, Bootstrap, Gulp, Grunt</span></li>
                            <li>Разработка фронтенд-проектов на <span>JavaScript</span> и <span>TypeScript</span></li>
                            <li>Разработка проектов на фреймворках <span>Angular</span> и <span>React</span></li>
                            <li>Отладка кода, развертывание, сборка, деплоймент</li>
                            <li>Понимание концепций <span>SPA и MVC</span>, паттернов проектирования, <span>ООП</span></li>
                            <li>Уверенное знание <span>Git</span></li>
                            <li>Создание <span>unit-тестов</span></li>
                            <li>Базовые знания <span>бэкенда</span> и <span>Node.js</span>, понимание принципов <span>API</span></li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
