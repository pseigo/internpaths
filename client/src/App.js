import React, { Component } from 'react';
import Maps from './components/Map';
import Navbar from './components/Navbar';
import axios from 'axios';
import 'antd/dist/antd.css';
import './index.css';
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
        <Navbar/>
        <Maps/>
      </div>
    );
  }
}

export default App;
