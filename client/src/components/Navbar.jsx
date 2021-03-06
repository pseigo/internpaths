import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import '../assets/styles/navbar.css';

const { Header } = Layout;
const companyName = 'internpaths';

class Navbar extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <div className="logo"><a href=".">{companyName}</a></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">home</Menu.Item>
                        <Menu.Item key="2">jobs</Menu.Item>
                        <Menu.Item key="3">log in</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        );
    }
}

export default Navbar;
