import './Layout.css'
import {Header} from '../components/Header/Header'
import {Hero} from '../components/Hero/Hero'
import {About} from '../components/About/About'
import {Product} from '../components/Product/Product'
import {Category} from '../components/Category/Category'
import {Contacts} from '../components/Contacts/Contacts'
import {Footer} from '../components/Footer/Footer'

export const Layout = () => {

    return (
        <>
            <Header/>

            <main>
            <Hero/>
            <About/>
            <Product/>
            <Category/>
            <Contacts/>
            </main>

            <Footer/>
        </>
    )
}