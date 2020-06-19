import React from 'react';
import Name from './Name'
import Waiting from './Waiting'
import Elapsed from './Elapsed'
import './styles.css';

// Office is the representational component of one office card
const Office = ({office}) =>(

    <div className={`office ${office.class}`}>
        <Name name={office.name}/>
        <div className="bottom-layout">
            <Waiting waiting ={office.peopleWaiting} />
            <Elapsed elapsed ={office.elapsedTime} />
        </div>
    </div>
);

export default Office;



