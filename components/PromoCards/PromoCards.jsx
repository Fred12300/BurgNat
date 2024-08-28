import './promoCards.css'
import Button from '../Button/Button'

const PromoCards = ({picUrl, title, reduction, text}) => {
    return(
        <div className='card'>
            <div><img src={picUrl} alt="missing pic" className="image"/></div>
            <div className='promoText'>
                <p className='title'>{title}</p>
                <p><span className='reduction'>{reduction}</span> <span className='text'>{text}</span></p>
            </div>
            <Button content={<><p>Je commande</p><i className="fa-solid fa-cart-shopping"></i></>}/>
        </div>
    )
}

export default PromoCards