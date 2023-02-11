import './contacts.css'

export const Contacts = () => {

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

                                <p className='contact-section__phone-number prop'>+998 97 703-70-80</p>
                            </div>

                            <div className='contact-section__mail-wrapper'>
                                <p className='contact-section__mail heading'>Почта:</p>

                                <p className='contact-section__mail-name prop'>info@ubdgroup.uz</p>
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