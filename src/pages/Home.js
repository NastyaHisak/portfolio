import Header from './../components/header/Header'

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
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
