import './iconsNavBar.css';
import Button from '../Button/Button'

const IconsNavBar = () => {
    return (
        <div className='iconsNavBar'>
            <div className='loginIcon'><i className="fa-solid fa-user"></i></div>
            <div className='cartIcon'><i className="fa-solid fa-cart-shopping"></i></div>
            <div className='lensIcon'><i className="fa-solid fa-magnifying-glass"></i></div>
            <Button content={<><i className="fa-solid fa-bag-shopping"></i><p>Click&Collect</p></>} />
        </div>
    )
}

export default IconsNavBar