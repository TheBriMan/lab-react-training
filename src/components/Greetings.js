import React from 'react';
import "../components/Components.css";

function Greetings(props) {
    const {lang,fName} = props;
    let hello = '';
    if (lang === "de") {
        hello = 'Hallo'
    } else if (lang === "es") {
        hello = 'Hola'
    } else if (lang === "fr") {
        hello = 'Bonjour'
    } else if (lang === "en") {
        hello = 'Hello'
    } else {
        hello = 'Hi'
    }

    return (
        <div className="greeting">
            <p>{hello} {fName}</p>
        </div>
    )
}

export default Greetings