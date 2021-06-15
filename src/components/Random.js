import React from 'react';
import "../components/Components.css";

function RandomNum (props) {
    const {max,min} = props;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <p className="random">Random number between 1 and 6 = {randomNum}</p>
    )
}

export default RandomNum