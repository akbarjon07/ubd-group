import './categoryCard.css'

export const CategoryCard = (props) => {

    return (
        <div className='category-card'>
            <img className='category-card__img' src={props.img} alt="img"/>

            <div className='category-card__wrapper'>
                <h4 className='category-card___title'>{props.title}</h4>

                <p className='category-card__desc'>{props.desc}</p>
            </div>
        </div>
    )
}