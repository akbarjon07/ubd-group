import './category.css'
import { CategoryCard } from '../CategoryCard/CategoryCard'
import Fur from '../../assets/images/mebel.jpeg'
import Pack from '../../assets/images/pack.jpeg'
import Building from '../../assets/images/build.jpeg'
import Med from '../../assets/images/med.png'

export const Category = (props) => {

    return (
        <section className='category-section'>
            <div className="container">
                <ul className='category-section__list'>
                    <li className='category-section__item'>
                        <CategoryCard img={Fur} title='Мебельная промышленность' desc='Обивка и прослойка для мебели'/>
                    </li>

                    <li className='category-section__item'>
                        <CategoryCard img={Pack} title='Рекламная продукция' desc='Чехлы, футляры и сумки с вашими логотипами'/>
                    </li>

                    <li className='category-section__item'>
                        <CategoryCard img={Building} title='Укрывной материал' desc='Для ладшафтных работ и строительства'/>
                    </li>

                    <li className='category-section__item'>
                        <CategoryCard img={Med} title='Медицина и спецодежда' desc='Халаты, бахилы, шапочки, простыни на кушетку'/>
                    </li>
                </ul>
            </div>
        </section>
    )
}