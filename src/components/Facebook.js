import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends Component {

  render() {

    return [...profiles].map(function (item, index) {
      return (
        <div key={index}>
          <img src={item.img} alt="img" />
          <div>
            <p>
              <strong>First Name: </strong>
              {item.firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {item.lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {item.country}
            </p>
            <p>
              <strong>Type: </strong>
              {item.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    });
  }
}
export default FaceBook;