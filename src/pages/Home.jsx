import NavBar from '../../components/NavBar'
import Carousel from '../../components/carousel/Carousel'
import './home.css'

const Home = () => {
    return (
        <div className="burgerBG">
            <NavBar />
            <Carousel />
        </div>
    )
}

export default Home