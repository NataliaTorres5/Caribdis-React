import '../styles/WelcomePage.css'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'

function WelcomePage() {
 

return (
    <>
    <HeaderPage/>
    <div className="hero-container">
        <div className="Hero-Background">
            <div className="Hero-CallToAction">
                <h1 className="H1 Hero-Title">Bienvenido <strong>El Oceano te llama</strong></h1>
                <h2 className="Hero-Text">Siente la brisa del mar y aprecia la maravilla debajo de la superficie </h2>
                <br />
                <button></button>
            </div>
        </div>
    </div>
    <Footer/>
    </>


)


}

export default WelcomePage