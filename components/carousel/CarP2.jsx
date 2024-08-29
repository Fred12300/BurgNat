import './carousel.css'
import Button from '../Button/Button'

const CarP2 = () => {
    return (
        <div className='carPage'>
            <h2>Vraiment</h2>
            <h2>Trop Bien</h2>
            <p className='paraText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet impedit quisquam similique, ullam aperiam animi totam assumenda officia eos sapiente? Nesciunt itaque laboriosam possimus adipisci iste dolores sapiente illum minus?</p>
            <Button content={<p>J'aime</p>} />
        </div>
    )
}

export default CarP2