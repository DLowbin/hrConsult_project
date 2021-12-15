import './NavMenuStyle.css';
import Link from "react-router-dom/es/Link";

// const routes = [
//     {
//         to: '/',
//         title: 'Main'
//     },
//     {
//         to: '/about',
//         title: 'About'
//     },
//     {
//         to: '/contacts',
//         title: 'Contacts'
//     },
//     {
//         to: '/private',
//         title: 'Private'
//     }
// ]




function NavMenu() {
    return (
        <div className="header">
            {/*<a href="#" className="header-logo"></a>*/}
            <nav>
                <ul className="header-nav">
                    <li><Link to={'/'}>Главная</Link></li>
                    <li><Link to={'/articles'}> Статьи</Link></li>
                    <li>Консультации</li>
                    <li>Услуги</li>
                    <li><Link to={'/registration'}>Войти</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default NavMenu;