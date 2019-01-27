import React, { Component } from 'react';
import { Layout} from 'antd';
import '../assets/styles/footer.css';

const { Footer } = Layout;
const copyRight = 'Created by Goodfellas Team - nwHacks 2019';

class FooterBar extends Component {
    render() {
        return (
            <Layout className="layout">
                <Footer className="footer" >
                    <p className="copyright">&copy; {copyRight}</p>
                </Footer>
            </Layout>
        );
    }
}

export default FooterBar;
