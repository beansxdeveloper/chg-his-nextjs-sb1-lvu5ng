'use client';

import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useAppSelector } from '@/lib/store/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

export default function DashboardSidebar() {
  const { sidebarOpen } = useAppSelector((state) => state.ui);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: t('dashboard.menu.dashboard'),
    },
    {
      key: '/dashboard/users',
      icon: <UserOutlined />,
      label: t('dashboard.menu.users'),
    },
    {
      key: '/dashboard/orders',
      icon: <ShoppingCartOutlined />,
      label: t('dashboard.menu.orders'),
    },
    {
      key: '/dashboard/settings',
      icon: <SettingOutlined />,
      label: t('dashboard.menu.settings'),
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={!sidebarOpen}
      className="min-h-screen"
    >
      <div className="h-16 flex items-center justify-center">
        <h1 className="text-white text-xl font-bold">Admin</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={menuItems}
        onClick={({ key }) => router.push(key)}
      />
    </Sider>
  );
}