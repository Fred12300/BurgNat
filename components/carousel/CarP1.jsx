import './carousel.css'
import Button from '../Button/Button'

const CarP1 = () => {
    return (
        <div className='carPage'>
            <h2>Fast Food</h2>
            <h2>Restaurant</h2>
            <p className='paraText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet impedit quisquam similique, ullam aperiam animi totam assumenda officia eos sapiente? Nesciunt itaque laboriosam possimus adipisci iste dolores sapiente illum minus?</p>
            <Button content={<p>Commander</p>} />
        </div>
    )
}

export default CarP1