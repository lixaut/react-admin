
import React, { useState } from 'react';
import { Breadcrumb, ConfigProvider, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from 'components/MainMenu'

const { Header, Content, Footer, Sider } = Layout;
const { useToken } = theme

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme='dark'
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        {/* 主菜单 */}
        <MainMenu></MainMenu>
      </Sider>
      <ConfigProvider
        theme={{ algorithm: theme.defaultAlgorithm }}
      >
        <Layout>
          <Header style={{ padding: 0, background: token['blue-2'] }}>
            <Breadcrumb style={{ lineHeight: '64px', paddingLeft: '20px', color: '#333' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '20px 20px 0' }}>
            <div style={{ padding: 20, minHeight: '100%', background: token['blue-2'] }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </ConfigProvider>
    </Layout>
  );
};

export default App;