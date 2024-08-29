import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <h3>Nous Contacter</h3>
            <p><i className="fa-solid fa-location-dot"></i>Localisation</p>
            <p><i className="fa-solid fa-phone"></i>Tél; +01 02030405</p>
            <p><i className="fa-solid fa-envelope"></i>burgernation@bg.com</p>
            <img src="logo-BurgerNation.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptates facilis dignissimos qui temporibus. Cum at illum labore?</p>
            <div className='logos'><i className="fa-brands fa-facebook-f circle"></i><i className="fa-brands fa-linkedin-in circle"></i><i className="fa-brands fa-twitter circle"></i><i className="fa-brands fa-instagram circle"></i><i className="fa-brands fa-pinterest circle"></i></div>
            <h3>Horaires d'ouverture</h3>
            <p>Tous les jours sauf le dimanche</p>
            <p>Service de 11h30 à 21h00</p>
            <p>© 2024 Tous droits réservés par BurgerNation</p>
        </div>
    )
}

export default Footer