import './header.css'
import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/site-logo.svg'

export const Header = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header className='header'>
            <div className="container header__container">
                <Link className='header__logo-link' to="#">
                    <img className='header__logo-img' src={logo} alt="site-logo" width={202} height={40} />
                </Link>

                <nav ref={navRef} className='header__nav'>
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

                    <button onClick={showNavbar} className='header__close-btn nav-btn'><i className="bi bi-x-lg"></i></button>
                </nav>

                <button className="header__btn">
                    <i className="bi bi-plus-lg"></i>
                    Оставить заявку
                </button>

                <button className='header__menu-btn nav-btn'>
                    <i onClick={showNavbar} className="bi bi-list"></i>
                </button>
            </div>
        </header>
    )
}