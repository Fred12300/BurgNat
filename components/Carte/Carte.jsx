import './carte.css'
import foodData from '../../foodData.json'
import { useEffect, useState } from 'react';

const CatSelector = ({ selectedCat, setSelectedCat }) => {
    
    const categories = Array.from(new Set(foodData.map((ele) => ele.category)));

    const selectCat = (event) => {
        const selectedId = event.target.id;
        setSelectedCat(selectedId);
    };

    return (
        <div className='catSelector'>
            <div
                className={`category ${selectedCat === "0" ? 'selected' : ''}`}
                id="0"
                onClick={selectCat}
            >
                Tous
            </div>
            {categories.map((cat, index) => (
                <div
                    className={`category ${selectedCat === (index + 1).toString() ? 'selected' : ''}`}
                    key={`${cat}-key`}
                    id={(index + 1).toString()}
                    onClick={selectCat}
                >
                    {cat}
                </div>
            ))}
        </div>
    );
};


const Carte = () => {
    const [selectedCat, setSelectedCat] = useState("0");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const categories = ["Tous", ...Array.from(new Set(foodData.map((ele) => ele.category)))];
        
        if (selectedCat === "0") {
            setFilteredData(foodData);
        } else {
            const category = categories[selectedCat];
            setFilteredData(foodData.filter(ele => ele.category === category));
        }
    }, [selectedCat]);

    

    return (
        <div className="laCarte">
            <h2 className='carteTitre'>La Carte</h2>
            <CatSelector selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
            <div className="cardContainer">
            {filteredData.map((ele)=>
                <div key={ele.id} className='cardBox'>
                        <div className='cardPicture'>
                            <img src={ele.image} alt="{ele.image}" />
                        </div>
                    <div className="cardText">
                        <div className='cardTitle'>{ele.name}</div>
                        <div className='cardDescription'>{ele.description}</div>
                    </div>
                    <div className="cardCarte">
                        <div>{ele.price}</div>
                        <div className='roundButton'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            )}
            </div>

        </div>
    )
}

export default Carte