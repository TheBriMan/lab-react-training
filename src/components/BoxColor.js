import React from 'react';
import "../components/Components.css";

function BoxColor(props) {
    //console.log('something')
    const {red,green,blue} = props;
    let color = 'white';
    if (red+green+blue > 127*3) {
        color = 'black'
    };
    return (
        <div className="box-color" style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            color: color,
          }}>
            rgb({red},{green},{blue})
        </div>
    )

}

export default BoxColor