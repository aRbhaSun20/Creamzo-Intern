import React from 'react';
import './style/style.css';
import def from '../../Pages/Discover/assets/defaultExplore.jpg'
const DiscoverItem = ({ img, name }) => {
    return (
        <div >
            <div className="grid-item">
                    <img src={def} alt="Discover" />
                <div className="grid-item-title ">{name}</div>
                </div>
        </div>
    );
}
export default DiscoverItem;
