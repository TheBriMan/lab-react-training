import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: './img/dice-empty.png',
    };
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const images = [
      './img/dice1.png',
      './img/dice2.png',
      './img/dice3.png',
      './img/dice4.png',
      './img/dice5.png',
      './img/dice6.png',
    ];
    const randomNumber = Math.floor(Math.random() * images.length);
     setTimeout(() => this.setState({ img: images[randomNumber] }), 1000);
  }

  render() {
    return (
      <img className="Dice" onClick={this.handleClick} src={this.state.img} alt="" />
    );
  }
}

export default Dice;