import React, { Component } from 'react';
import Maps from './components/Map';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.post('/api/jobs', {
      radius: 50,
      address: '2329 West Mall, Vancouver, BC V6T 1Z4',
      tile: 'Developer',
    })
  }

  render() {
    return (
      <div>
        <Maps />>
      </div>
    );
  }
}

export default App;
