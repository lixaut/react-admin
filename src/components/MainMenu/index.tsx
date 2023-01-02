
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/user', <PieChartOutlined />),
  getItem('Option 2', '/about', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const rootSubmenuKeys = ['sub1', 'sub2']

const MainMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([''])
  // 编程导航 hook
  const navigateTo = useNavigate()

  // 菜单点击事件
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }

  // 只能同时打开一个菜单
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  
  return (
    <Menu 
      theme="dark" 
      defaultSelectedKeys={['/user']} 
      mode="inline"
      items={items} 
      onClick={menuClick}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MainMenu