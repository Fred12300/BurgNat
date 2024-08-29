import './about.css'
import Button from '../Button/Button'

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop">
                <h2>BurgerNation, c'est...</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt sint facilis consequuntur laudantium. Ullam exercitationem illum soluta minima voluptates vero tempora nobis velit sit aliquid. lore10
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, beatae!
                </p>
                <Button content="En Savoir +" />
            </div>
            <img className='aboutImg' src="about-img.png" alt="" />
        </div>
    )
}

export default About