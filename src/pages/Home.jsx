import NavBar from '../../components/NavBar'
import PromoCards from '../../components/PromoCards/PromoCards'
import Carousel from '../../components/carousel/Carousel'
import Carte from '../../components/Carte/Carte'

import './home.css'

const Home = () => {
    return (
        <div className="burgerBG">
            <NavBar />
            <Carousel />
            <div className="promos">
                <PromoCards picUrl="o1.jpg" title="Tasty Thursday" text="de réduction" reduction="20%"/>
                <PromoCards picUrl="o2.jpg" title="Pizza Days" text="de réduction" reduction="15%"/>
                <PromoCards picUrl="o1.jpg" title="Ouai" text="bla bla" reduction="50%" />
            </div>
            <Carte />
        </div>
    )
}

export default Home