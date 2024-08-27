import './iconsNavBar.css';


const IconsNavBar = () => {
    return (
        <div className='iconsNavBar'>
            <div className='loginIcon'><i className="fa-solid fa-user"></i></div>
            <div className='cartIcon'><i className="fa-solid fa-cart-shopping"></i></div>
            <div className='lensIcon'><i className="fa-solid fa-magnifying-glass"></i></div>
            <button className='clickAndCollectBtn'><i className="fa-solid fa-bag-shopping"></i> Click&Collect</button>
        </div>
    )
}

export default IconsNavBar