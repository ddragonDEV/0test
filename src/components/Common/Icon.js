import React from 'react'
import './styles.css';

const Icon = ({path}) =>(
    <div className="icon-container">
        <img  alt="icono" className="icon"  src={path}/>
    </div>
);

export default Icon;