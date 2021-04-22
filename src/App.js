import logo from './logo.svg';
import './App.css';
import dataDB from '../src/data';
import BirthdayList from './components/BirthdayList'
import { useState } from 'react';

function App() {
  const [birthdayNames, setBirthdayNames] = useState(dataDB);
  console.log(birthdayNames)
  return (
    <div className="container">
      <h1>Birthday</h1>
      {birthdayNames && birthdayNames.map((birthdayName)=>{
        return <BirthdayList birthdayName={birthdayName} />
      })}
      {/* <BirthdayList birthdayNames = {birthdayNames} /> */}
    </div>
  );
}

export default App;
