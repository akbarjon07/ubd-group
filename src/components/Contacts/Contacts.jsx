import './contacts.css'
import { useState, useEffect } from 'react'

export const Contacts = () => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        async function fetchInfo () {
            const res = await fetch('http://api.ubdgroup.uz/api/v2/settings', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const result = await res.json();
            console.log(res)
            setInfo(result)
        }
        fetchInfo ()
    }, [])



    return (
        <section className='contact-section'>
            <div className="container">
                <div className='contact-section__wrapper'>

                    <div className="contact-section__left">
                        <h2 className='contact-section__title'>Наши контакты</h2>

                        <form className='contact-section__form'>
                            <div className='contact-section__form-wrapper'>

                                <input className='contact-section__name-input form-control input' type="text" placeholder='Ваше имя'/>

                                <input className='contact-section__mail-input form-control input' type="text" placeholder='Ваш e-mail'/>

                            </div>

                            <textarea className='contact-section__message-input form-control' type="text" placeholder='Ваше сообщение'/>

                            <button className='contact-section__btn'>
                                <i className="bi bi-arrow-up-right send-btn"></i>
                            </button>
                        </form>
                    </div>

                    <div className='contact-section__right'>
                        <div className='contact-section__contact-wrapper'>
                            <div className='contact-section__phone-wrapper'>
                                <p className='contact-section__phone heading'>Телефон:</p>

                                <a className='contact-section__phone-number prop' href='tel:+998 97 703-70-80'>+998 97 703-70-80</a>
                            </div>

                            <div className='contact-section__mail-wrapper'>
                                <p className='contact-section__mail heading'>Почта:</p>

                                <a className='contact-section__mail-name prop' href='mailto:info@ubdgroup.uz'>info@ubdgroup.uz</a>
                            </div>
                        </div>

                        <div className='contact-section__address-wrapper'>
                            <p className='contact-section__address heading'>Адрес:</p>

                            <p className='contact-section__address-name prop'>г.Ташкент, ул.Мустакиллик 59</p>

                            <a className='contact-section__address-map' href='#'>
                                <i className="bi bi-geo"></i>
                                Показать на карте
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}