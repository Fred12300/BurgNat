import { useState } from 'react';
import './navBar.css';
import IconsNavBar from './iconsNavBar/iconsNavBar';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

const NavBar = ({dark}) => {
    const [isActive, setIsActive] = useState(false);

    const changeNav = () => {
        const traits = document.getElementsByClassName('trait');
        Array.from(traits).forEach((x) => {
            x.classList.toggle("cross");
        });
        setIsActive(!isActive);
    };

    const landscape = useMediaQuery({ query: '(min-width: 568px)' });

    return (
        <div className={`navBar ${dark ? 'dark' : ''}`}>
            <div>
                <Link className="logo" to="/"><img src="logo-BurgerNation.png" alt="Logo" /></Link>
            </div>
            <div className="burger" onClick={changeNav}>
                <div className="trait haut"></div>
                <div className="trait milieu"></div>
                <div className="trait bas"></div>
            </div>
            <nav className={`navNav ${isActive ? "animNav" : ""} ${landscape ? "animNav" : ""}`}>
                <ul className="navUl">
                    <li>
                        <Link to="/CartePage" className="navLi">LA CARTE</Link>
                    </li>
                    <li>
                        <Link to="/APropos" className="navLi">A PROPOS</Link>
                    </li>
                    <li>
                        <Link to="/Reserver" className="navLi">RESERVER</Link>
                    </li>
                    <IconsNavBar />
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
