import React from 'react';
import "../components/IdCard.css";

function IdCard(props) {
    return (
        <div className="idcard">
            <div>
                <img src={props.imgUrl} alt="img" />
            </div>
            <div>
                <p><b>First Name: </b>{props.firstName}</p>
                <p><b>Last Name: </b>{props.lastName}</p>
                <p><b>Gender: </b>{props.gender}</p>
                <p><b>Height: </b>{props.height}m</p>
                <p><b>Birth Date: </b>{props.birth}</p>
            </div>
        </div>
    );
}

export default IdCard