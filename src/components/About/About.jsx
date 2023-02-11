import './about.css'

export const About = () => {

    return (
        <section className='about-section'>
            <div className='container'>
                <h2 className='about-section__title'>Что такое спанбонд?</h2>

                <div className='about-section__desc-wrapper'>
                    <p className='about-section__desc'>Спанбонд (англ. spunbond) — название технологии производства нетканого материала из расплава полимера фильерным способом. В профессиональной области так называют и сам материал, который производят по описанной технологии.</p>

                    <p className='about-section__desc'>Наиболее часто для производства «спанбонда» используется полипропилен, поскольку он позволяет получать наиболее плотное распределение волокон в холсте и обеспечивает высокую выработку волокон в перерасчёте на килограмм сырья.</p>

                    <p className='about-section__desc'>Толщина спанбонда определяется его назначением и способом производства, так как от толщины зависит его воздухопроницаемость, жёсткость, теплоизоляционные свойства.</p>
                </div>

                <button className='about-section__btn'>
                    <i className="bi bi-arrow-up-right"></i>
                </button>
            </div>
        </section>
    )
}