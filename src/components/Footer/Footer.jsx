import './footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

    return (
        <footer className='footer'>
            <div className="container footer__container">
                <span className='footer__span'></span>

                <ul className='footer__nav-list'>
                    <li className='footer__nav-item'>
                        <NavLink className='footer__nav-link' to='#'>Главная</NavLink>

                        <span className='footer__nav-span'></span>
                    </li>

                    <li className='footer__nav-item'>
                        <NavLink className='footer__nav-link' to='#'>Фотогалерея</NavLink>

                        <span className='footer__nav-span'></span>
                    </li>

                    <li className='footer__nav-item'>
                        <NavLink className='footer__nav-link res-link' to='#'>Продукция</NavLink>

                        <span className='footer__nav-span res-span'></span>
                    </li>

                    <li className='footer__nav-item'>
                        <NavLink className='footer__nav-link' to='#'>Контакты</NavLink>

                        <span className='footer__nav-span'></span>
                    </li>

                    <li className='footer__nav-item'>
                        <NavLink className='footer__nav-link' to='#'>Оставить заявку</NavLink>
                    </li>
                </ul>

                <div className='footer__wrapper'>
                    <ul className='footer__media-list'>
                        <li className='footer__media-item'>
                            <a className='footer__media-link' href="#">
                                <i className="bi bi-facebook icon"></i>
                            </a>
                        </li>

                        <li className='footer__media-item'>
                            <a className='footer__media-link' href="#">
                                <i className="bi bi-instagram icon"></i>
                            </a>
                        </li>


                        <li className='footer__media-item'>
                            <a className='footer__media-link' href="#">
                                <i className="bi bi-telegram icon"></i>
                            </a>
                        </li>
                    </ul>

                    <p className='footer__media-desc'>Разработка - INWEB</p>
                </div>
            </div>
        </footer>
    )
}