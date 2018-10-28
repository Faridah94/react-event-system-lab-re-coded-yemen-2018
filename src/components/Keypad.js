// Code Keypad Component Here
import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';


export default class Keypad extends React.Component {
  keys = () =>{
=======

export default class Keypad extends React.Component {
  tickle = () => {
>>>>>>> f769f7fcf73e807ced5cc3ced19390d7876e0b22
    console.log('Entering password...');
  }

  render() {
    return (
<<<<<<< HEAD
      <input type="password"  onKeyUp ={this.keys}/>
=======
      <input type="text" onkeyUp={this.tickle}></input>
>>>>>>> f769f7fcf73e807ced5cc3ced19390d7876e0b22
    );
  }
}
