import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: name, age:age, nameValid:nameIsValid, ageValid:ageIsValid};

    var name = props.name;
    var nameIsValid = this.validateName(name);
    var age = props.age;
    var ageIsValid = this.validateAge(age);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  validateAge(age) {
    return age>= 0;
  }

  validateName(name) {
    return name.length > 2;
  }

  onNameChange(e) {
    var val = e.target.value;
    console.log(val);
    var valid = this.validateName(val);
    this.setState({name:val, nameValid: valid});
  }

  onAgeChange(e) {
    var val = e.target.value;
    var valid = this.validateAge(val);
    this.setState({age: val, ageValid: valid});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.nameValid === true && this.state.ageValid === true){
      alert("Имя: " + this.state.name + " Возраст: " + this.state.age);
    }
  }

  render() {
    var nameColor = this.state.nameValid === true? "green":"red";
    var ageColor = this.state.ageValid === true? "green":"red";
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Имя:</label>
          <input type="text" value={this.state.name} onChange={this.onNameChange} style={{borderColor: nameColor}} />
        </p>
        <p>
          <label>Возраст:</label>
          <input type="text" value={this.state.age} onChange={this.onAgeChange} style={{borderColor: ageColor}} />
        </p>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default App;
