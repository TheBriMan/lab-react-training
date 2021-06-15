import React from 'react';
import "../components/Components.css";
//import Rating from "../components/Rating.js";

function DriverCard(props) {
    return (
        <div className="driver-card-container">
            <div className="profile-img">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="profile-info">
                <span>{props.name}</span>
                <div className="rating">
                {props.rating >= 0.5 ? '★' : '☆'}
                {props.rating >= 1.5 ? '★' : '☆'}
                {props.rating >= 2.5 ? '★' : '☆'}
                {props.rating >= 3.5 ? '★' : '☆'}
                {props.rating >= 4.5 ? '★' : '☆'}
                </div>
                <span>{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    )
}

export default DriverCard;