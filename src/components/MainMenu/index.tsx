
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
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
    getItem('Item1', '/sub1/item1'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8')
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const MainMenu: React.FC = () => {
  
  // 编程导航 hook
  const navigateTo = useNavigate()
  // 获取路由信息 hook
  const currentRoute = useLocation()
  
  // 设置默认展开项
  let defaultOpenKey: string = ''
  function findKey(obj: MenuItem) {
    return obj!.key === currentRoute.pathname
  }
  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!['children'] &&
      items[i]!['children'].length > 0 &&
      items[i]!['children'].find(findKey)
    ) {
      defaultOpenKey = items[i]!.key as string;
      break;
    }
  }

  const [openKeys, setOpenKeys] = useState([defaultOpenKey])

  // 菜单点击事件
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }

  // 只能同时打开一个菜单
  const rootSubmenuKeys = ['sub1', 'sub2']
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
      defaultSelectedKeys={[currentRoute.pathname]} 
      mode="inline"
      items={items} 
      onClick={menuClick}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MainMenu