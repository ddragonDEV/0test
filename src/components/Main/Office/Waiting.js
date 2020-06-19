import React from 'react'
import './styles.css';
import people from '../../../assets/peopleIcon.png'
import Icon from '../../Common/Icon'

// waiting value is the sum of people waiting in all lines of that office
const Waiting = ({waiting}) =>(
    <div className="waiting">
        <Icon path={people }/>
        <span className="waiting-span">{waiting}</span>
    </div>
);


export default Waiting;