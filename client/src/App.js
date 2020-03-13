import React from 'react';
import axios from 'axios';
import './App.css';
import Search from "./components/Search";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      soccerData: [],
    }
  }

  //class component fetch api data
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response.data);
      this.setState({
        soccerData: response.data
      });
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <Search soccerData={this.state.soccerData} />
      </div>
    );
  }
  
}

export default App;
