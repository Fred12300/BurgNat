import './carousel.css'
import Button from '../Button/Button'

const CarP2 = () => {
    return (
        <div className='carPage'>
            <p className='bigText'>Vraiment</p>
            <p className='bigText'>Trop Bien</p>
            <p className='paraText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet impedit quisquam similique, ullam aperiam animi totam assumenda officia eos sapiente? Nesciunt itaque laboriosam possimus adipisci iste dolores sapiente illum minus?</p>
            <Button content={<p>J'aime</p>} />
        </div>
    )
}

export default CarP2