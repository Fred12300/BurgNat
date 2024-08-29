import './reservation.css'
import Button from '../Button/Button'

const Reservation = () => {
    
    const today = new Date().toISOString().substring(0,10)

    return (
        <div className="reservation">
            <h2>Réserver une table</h2>
            <form className="formulaire" action="">
                <input className='inputField' type="text" placeholder="Votre Nom"/>
                <input className='inputField' type="text" placeholder="Votre Téléphone"/>
                <input className='inputField' type="mail" placeholder="Votre Email"/>
                <input className='inputField' type="number" placeholder="Nombre de personnes ?"/>
                <input className='inputField' id="date" type="date" defaultValue={today}/>
            </form>
            <Button content="RESERVER"/>

            <div>MAP GOOGLE</div>


        </div>
    )
}

export default Reservation