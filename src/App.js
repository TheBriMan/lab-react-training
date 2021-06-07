import React from 'react';
import './App.css';

import IdCard from './components/IdCard.js';

function App() {
  return (
    <div className="App">
      <IdCard
      lastName="Doe"
      firstName='John'
      gender='male'
      height="178"
      birth="1992-07-14"
      imgUrl="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>
  );
}

export default App;
