import React, { Component } from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
import { Badge } from 'antd';
import '../assets/styles/jobslist.css';

const FormItem = Form.Item;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text, record) => (
        <div>
            <span>
                <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
            </span>
        </div>
    ),
}];

const data = [];
for (let i = 1; i <= 10; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

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
        const state = this.state;
        return (
            <div>
                <div className="components-table-demo-control-bar">
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
                <Table {...this.state} columns={columns} dataSource={state.hasData ? data : null} />
            </div>
        );
    }
}

export default JobsList;