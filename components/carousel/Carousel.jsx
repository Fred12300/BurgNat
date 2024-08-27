import { useState } from 'react'
import './carousel.css'
import CarP1 from './CarP1'
import CarP2 from './CarP2'
import CarP3 from './CarP3'

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(1)

    const rollCar = () => {
        if(activeSlide>>activeSlide.length){
            setActiveSlide(1)
        }
        const runCarousel = setInterval(()=>{
            
        })
    }


    return (
        <div>
            <div className='carouselContainer' onClick={rollCar}>
                <CarP1 className="page" id="page1"/>
                <CarP2 className="page" id="page2"/>
                <CarP3 className="page" id="page3"/>
            </div>
            <div className='pointContainer'>
                <a className="point active" href='#page1'></a>
                <a className="point" href='#page2'></a>
                <a className="point" href='#page3'></a>
            </div>
        </div>
    )
}

export default Carousel