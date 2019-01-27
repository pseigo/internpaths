import React, { Component } from 'react';
import FetchAPI from './components/FetchAPI';
import APIHandler from './components/APIHandler';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: '/api/get',
      filter: {},
    }
  }
  // componentDidMount() {
  //   axios.post('/api/create', {
  //     job_title: 'Software Engineer',
  //   })
  //   .then(function(res) {
  //     console.log(res);
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   })
  //   axios.post('/api/create')
  // }

  render() {
    let filter = {
      job_title: 'Software Developer',
    }
    return (
      <div>
        <Navbar />
        <FetchAPI 
          endpoint={this.state.api}
          filter={filter}
          render={data =>
          <APIHandler
            data={data}
          />}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
