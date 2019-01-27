import React, { Component } from 'react';
import FetchAPI from './FetchAPI';
import 'antd/dist/antd.css';
import Map from './Map'

class MapController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: '/api/get',
    }
  }
  // componentDidMount() {
  //   axios.post('/api/get', {
  //     job_title: 'Software Developer',
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
      job_title: this.props.filter
    };
    return (
      <div>
        <FetchAPI
          endpoint={this.state.api}
          filter={filter}
          render={data =>
          <Map
              markers={data}
          />
          }
        />
      </div>
    );
  }
}

export default MapController;
