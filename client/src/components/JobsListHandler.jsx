import React, { Component } from 'react';
import JobsList from './JobsList';
import FetchAPI from './FetchAPI';

class JobsListHandler extends Component {

    render() {
        return (
            <div>
                <FetchAPI
                    endpoint='/api/retrieve'
                    filter=''
                    render={data =>
                    <JobsList
                        data={data}
                    />}
                />
            </div>
        );
    }
}

export default JobsListHandler;