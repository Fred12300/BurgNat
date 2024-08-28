import './carousel.css'
import Button from '../Button/Button'

const CarP1 = () => {
    return (
        <div className='carPage'>
            <p className='bigText'>Fast Food</p>
            <p className='bigText'>Restaurant</p>
            <p className='paraText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate amet impedit quisquam similique, ullam aperiam animi totam assumenda officia eos sapiente? Nesciunt itaque laboriosam possimus adipisci iste dolores sapiente illum minus?</p>
            <Button content={<p>Commander</p>} />
        </div>
    )
}

export default CarP1