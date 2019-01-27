import React, { Component } from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
import { Badge } from 'antd';
import '../assets/styles/jobslist.css';

const FormItem = Form.Item;

const columns = [{
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'company_name',
    width: 150,
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Job Title',
    dataIndex: 'job_title',
    key: 'job_title',
    width: 150,
}, {
    title: 'Address',
    dataIndex: 'location',
    key: 'location',
}, {
    title: 'Date Posted',
    dataIndex: 'date_posted',
    key: 'date_posted',
    width: 150,
}, {
    title: 'Application URL',
    dataIndex: 'company_url',
    key: 'company_url',
    width: 150
}, {
    title: 'Date Applied',
    dataIndex: 'date_applied',
    key: 'date_applied',
    width: 150,
}, {
    title: 'Status',
    dataIndex: 'stage',
    key: 'stage',
    width: 150,
    // render: (text, record) => (
    //     <div>
    //         <span>
    //             <Badge count={"Pending Application"} style={{ backgroundColor: '#52c41a' }} />
    //         </span>
    //     </div>
    // ),
}];

// const data = [{
//     key: 1,
//     company_name: 'Amazon',
//     job_title: 'Software developer',
//     location: '4580 W 10th Ave, Vancouver, BC V6R 4C5',
//     date_posted: '10-01-2019',
//     date_applied: '18-01-2019',
//     description: 'My name is John Brown, I am 2 years old, living in New York No. ${i} Lake Park.',
// }];

const expandedRowRender = record => <p>{record.description}</p>;
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

class JobsList extends Component {
    state = {
        bordered: false,
        pagination,
        size: 'default',
        expandedRowRender,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        data: this.props.data,
    }


    handleToggle = prop => (enable) => {
        this.setState({ [prop]: enable });
    }

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    handleExpandChange = (enable) => {
        this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
    }

    handleRowSelectionChange = (enable) => {
        this.setState({ rowSelection: enable ? {} : undefined });
    }

    handleScollChange = (enable) => {
        this.setState({ scroll: enable ? scroll : undefined });
    }

    handleDataChange = (hasData) => {
        this.setState({ hasData });
    }

    handlePaginationChange = (e) => {
        const { value } = e.target;
        this.setState({
            pagination: value === 'none' ? false : { position: value },
        });
    }

    render() {
        console.log(this.state.data);
        const state = this.state;
        return (
            <div>
                <div className="control-bar components-table-demo-control-bar">
                    <Form layout="inline">
                        <FormItem label="Bordered">
                            <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
                        </FormItem>
                        <FormItem label="Expandable">
                            <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
                        </FormItem>
                        <FormItem label="Checkbox">
                            <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
                        </FormItem>
                        <FormItem label="Fixed Header">
                            <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
                        </FormItem>
                        <FormItem label="Has Data">
                            <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
                        </FormItem>
                        <FormItem label="Size">
                            <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="middle">Middle</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                        </FormItem>
                        <FormItem label="Pagination">
                            <Radio.Group
                                value={state.pagination ? state.pagination.position : 'none'}
                                onChange={this.handlePaginationChange}
                            >
                                <Radio.Button value="top">Top</Radio.Button>
                                <Radio.Button value="bottom">Bottom</Radio.Button>
                                <Radio.Button value="both">Both</Radio.Button>
                                <Radio.Button value="none">None</Radio.Button>
                            </Radio.Group>
                        </FormItem>
                    </Form>
                </div>
                <Table {...this.state} columns={columns} dataSource={state.hasData ? this.state.data : null} />
            </div>
        );
    }
}

export default JobsList;
