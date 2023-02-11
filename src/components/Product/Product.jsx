import './product.css'
import {ProductCard} from '../ProductCard/ProductCard'
import Beauty from '../../assets/images/beauty.svg'
import Products from '../../assets/images/product.svg'
import Furniture from '../../assets/images/furniture.svg'
import Building from '../../assets/images/build.svg'
import Earth from '../../assets/images/earth.svg'
import Medicine from '../../assets/images/medic.svg'


export const Product = (props) => {

    return (
        <section className='product-section'>
            <div className="container">

                <h2 className='product-section__title'>Продукция</h2>

                <ul className='product-section__list'>

                    <li className='product-section__item'>
                        <ProductCard img={Beauty} title='Индустрия красоты' desc='Одноразовая одежда для клиента и для мастеров- обеспечивает гигиену и безопасность во время проведения процедуры'/>
                    </li>

                    <li className='product-section__item'>
                        <ProductCard img={Products} title='Рекламная продукция и упаковка' desc='Сувенирные сумки, чехлы, футляры с фирменным логотипом более прочные, экологичные и презентабельные по сравнению с полиэтиленом'/>
                    </li>

                    <li className='product-section__item'>
                        <ProductCard img={Furniture} title='Мебельная промышленность' desc='Легкий и недорогой материал применяют в качестве разделителя между обивкой и наполнителем, как прокладочный материал поверх пружинного блока'/>
                    </li>

                    <li className='product-section__item'>
                        <ProductCard img={Building} title='Строительство' desc='Нетканый материал используют в строительстве: дорог и автостоянок; железнодорожных путей и в реконструкции аэропортов; площадок для занятий спортом'/>
                    </li>

                    <li className='product-section__item'>
                        <ProductCard img={Earth} title='Сельское хозяйство' desc='Легкий вес никак не мешает росту даже самых тонких и слабых ростков; Защищает от насекомых-вредителей. Не гниет; Не выделяет токсинов и не вредит будущему урожаю'/>
                    </li>

                    <li className='product-section__item'>
                        <ProductCard img={Medicine} title='Медицина и спецодежда' desc='Материал используют для изготовления халатов и бахил для посетителей, шапочек, комплектов для медработников, а также одноразовых простыней для проведения процедур'/>
                    </li>

                </ul>
            </div>
        </section>
    )
}