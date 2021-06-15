import React from 'react';
import "../components/Components.css";

function IdCard(props) {
        const {imgUrl,firstName,lastName,gender,height,birth} = props;
        return (
            <div className="idcard">
                <div>
                    <img src={imgUrl} alt="img" />
                </div>
                <div>
                    <p><b>First Name: </b>{firstName}</p>
                    <p><b>Last Name: </b>{lastName}</p>
                    {gender === "male" || gender === "female" ? 
                    <p><b>Gender:</b> {gender}</p> : null}
                    <p><b>Height: </b>{height}m</p>
                    <p><b>Birth Date: </b>{birth.toString().slice(0,15)}</p>
                </div>
            </div>
        )
}
export default IdCard