import './productCard.css'

export const ProductCard = (props) => {

    return (
        <div className='product-card__wrapper'>
            <img className='product-card__img' src={props.img} alt="img"/>

            <h3 className='product-card__title'>{props.title}</h3>

            <p className='product-card__desc'>{props.desc}</p>
        </div>
    )
}