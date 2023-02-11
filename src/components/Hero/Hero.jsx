import './hero.css'
import {useState, useEffect} from 'react'


export const Hero = () => {

//   const [data, setData] = useState([]);

//     useEffect(() => {
//         async function getInfo() {
//           const res = await fetch("http://api.ubdgroup.uz/api/v2/banners?type=home_slide", {
//             headers: {
//                 'Accept': 'application/json'
//             },
//             params: {
//                 'type': 'home_slide'
//             }

//           })
//           const result = await res.json()
//           setData(result)
//           console.log(result)
//         }
//         getInfo()
//     }, [])

    return (
        <section className='hero-section'>
            <div className="container">
                <div className="hero-section__wrapper">
                    <h1 className='hero-section__title'>UBD поможет вам с подбором спанбонда</h1>

                    <p className='hero-section__desc'>Спанбонд – это современный, экологически чистый материал на основе волокон полипропилена</p>

                    <button className='hero-section__btn'>Узнать подробнее</button>
                </div>
            </div>
        </section>
    )
}