import React, { Component } from 'react';
import axios from 'axios';

// takes an "endpoint" prop
class FetchAPI extends Component {
    state = {
		data: [],
        loaded: false,
        placeholder: 'loading',
    };
    
    componentDidMount() {
		axios.post(this.props.endpoint, this.props.filter)
		.then(res => {
			if (res.status !== 200) {
				return console.log("Something went wrong");
			}
			return res.data;
		})
		.then(data => this.setState({ data: data, loaded: true }));
	}

    render() { 
        const { data, loaded } = this.state;
        return loaded ? 
        this.props.render(data) 
        : 
        this.state.placeholder;
    }
}
 
export default FetchAPI;