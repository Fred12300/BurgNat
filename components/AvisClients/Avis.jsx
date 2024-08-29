import './avis.css'
import UnAvis from './UnAvis'
import { useRef, useState, useEffect } from 'react';

const Avis = () => {
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
        const nextPage = (activePage + 1) % 2
        scrollToPage(nextPage);
    }

    useEffect(() => {
        const rollInterval = setInterval(next, 5000)

        return () => {
            clearInterval(rollInterval)
        };
    }, [activePage]);


    return (
        <div className="avis" >
                <h2>Ce que disent nos clients</h2>
            <div className="carouselAvis" ref={carouselRef}>
                <UnAvis who="Jean Bon" from="Bayonne" pic="client2.jpg"><p>J'ai beau aimer les frites, celles-ci me font un effet vraiment étrange...</p></UnAvis>
                <UnAvis who="Jeanne Dupont" from="Avignon" pic="client1.jpg"><p>A la base je voulais pas venir... Mais quand ma copine m'a dit qu'elle m'invitait, j'ai changé d'avis. Et depuis, je me gave !</p></UnAvis>
            </div>
        </div>
    )
}

export default Avis