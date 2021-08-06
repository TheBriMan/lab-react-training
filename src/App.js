import React from 'react';
import './App.css';

import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import RandomNum from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import CreditCard from './components/CreditCard.js';
import Rating from './components/Rating.js';
import DriverCard from './components/DriverCard.js';
import LikeButton from './components/LikeButton.js';
import ClickablePicture from './components/ClickablePicture.js';
import Dice from './components/Dice.js';
import Facebook from './components/Facebook.js';


function App() {
  return (
    <div className="App">
      <IdCard
      lastName="Doe"
      firstName='John'
      gender="male"
      height={178}
      birth={new Date("1992-07-14")}
      imgUrl="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <hr/>
      <Greetings lang="de" fName="Brian"/>
      <hr/>
      <RandomNum min="1" max="6"/>
      <hr/>
      <BoxColor red={255} green={23} blue={45} />
      <hr/>
      <BoxColor red={128} green={255} blue={0} />
      <hr/>
      <div className="App-cc-card">
      <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" />
      <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222" />
      <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" />
      </div>
      <hr/>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <hr/>
      <DriverCard
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }} />
      <hr/>
      <LikeButton />
      <hr/>
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <hr/>
      <Dice />
      <hr/>
      <Facebook />
    </div>
  );
}

export default App;
