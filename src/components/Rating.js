import React from 'react';
import "../components/Components.css";

function Rating (props){
    const stars = props.children
    return (
      <div className="Rating">
        {stars >= 0.5 ? '★' : '☆'}
        {stars >= 1.5 ? '★' : '☆'}
        {stars >= 2.5 ? '★' : '☆'}
        {stars >= 3.5 ? '★' : '☆'}
        {stars >= 4.5 ? '★' : '☆'}
      </div>
    );
  }

export default Rating; 