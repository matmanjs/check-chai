import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import './index.less';

class LayoutHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: '',
            isInit: false
        };
    }

    handleIsActive = (curMenu) => {
        if (!curMenu) {
            return;
        }
        // console.log('---handleIsActive---', curMenu);

        const map = {
            '/': 'dashboard',
            '/dashboard': 'dashboard',
            '/docs': 'docs'
        };

        let newMenuId = map[curMenu.url];

        if (newMenuId && newMenuId !== this.state.activeMenu) {
            setTimeout(() => {
                this.setState({
                    activeMenu: newMenuId,
                    isInit: true
                });
            }, 0);
        }
    };

    render() {
        let { activeMenu } = this.state;

        return (
            <Layout.Header className="layout-header header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[activeMenu]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="dashboard">
                        <NavLink to={`/dashboard`} isActive={this.handleIsActive}>工作台</NavLink>
                    </Menu.Item>

                    <Menu.Item key="docs">
                        <NavLink to={`/docs`} isActive={this.handleIsActive}>文档</NavLink>
                    </Menu.Item>

                </Menu>
            </Layout.Header>
        );
    }
}

export default LayoutHeader;