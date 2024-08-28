import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import CarP1 from './CarP1';
import CarP2 from './CarP2';
import CarP3 from './CarP3';

const Carousel = () => {
    const carouselRef = useRef(null);
    const [activePage, setActivePage] = useState(0)

    const scrollToPage = (pageIndex) => {
        if (carouselRef.current) {
        const pageWidth = carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
            left: pageWidth * pageIndex,
            behavior: 'smooth',
        });
        }
        setActivePage(pageIndex)
        const actualPoint = document.getElementsByClassName(`n${pageIndex}`)
        const previousPoint = document.getElementsByClassName('active')
        previousPoint[0].classList.toggle('active')
        actualPoint[0].classList.toggle('active')
    };

    const next = () => {
        const nextPage = (activePage + 1) % 3
        scrollToPage(nextPage);
    }

    useEffect(() => {
        const rollInterval = setInterval(next, 3000)

        return () => {
            clearInterval(rollInterval)
        };
    }, [activePage]);


    return (
        <div id='carousel'>
            <div className='carouselContainer' ref={carouselRef}>
                <div className="carouselPage">
                    <CarP1 className="page" id="page1" />
                </div>
                <div className="carouselPage">
                    <CarP2 className="page" id="page2" />
                </div>
                <div className="carouselPage">
                    <CarP3 className="page" id="page3" />
                </div>
            </div>
            <div className="pointContainer">
                <div className="point n0 active" onClick={() => scrollToPage(0)}></div>
                <div className="point n1" onClick={() => scrollToPage(1)}></div>
                <div className="point n2" onClick={() => scrollToPage(2)}></div>
            </div>
        </div>
    );
};

export default Carousel;