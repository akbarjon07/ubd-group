import './header.css'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/images/site-logo.svg'

export const Header = () => {

    return (
        <header className='header'>
            <div className="container header__container">
                <Link className='header__logo-link' to="#">
                    <img className='header__logo-img' src={logo} alt="site-logo" width={202} height={40} />
                </Link>

                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        <li className='header__nav-item'>
                            <NavLink className='header__nav-link' to="#">главная</NavLink>
                        </li>

                        <li className='header__nav-item'>
                            <NavLink className='header__nav-link' to="#">продукция</NavLink>
                        </li>

                        <li className='header__nav-item'>
                            <NavLink className='header__nav-link' to="#">фотогалерея</NavLink>
                        </li>

                        <li className='header__nav-item'>
                            <NavLink className='header__nav-link' to="#">контакты</NavLink>
                        </li>
                    </ul>
                </nav>

                <button className="header__btn">
                    <i className="bi bi-plus-lg"></i>
                    Оставить заявку
                </button>
            </div>
        </header>
    )
}