import './avis.css'

const UnAvis = (props) => {
    return (
        <div className="unAvis">
            <div className="avisTexte">
                <p className='avisPara'>{props.children}</p>
                <h3 className='avisName'>{props.who}</h3>
                <p className='avisTown'>{props.from}</p>
            </div>
            <div className="photoFleche">
                <div className='arrow-up'></div>
                <img className="avisPic"src={props.pic} alt="" />
            </div>
        </div>
    )
}

export default UnAvis