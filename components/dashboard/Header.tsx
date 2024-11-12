'use client';

import { Layout, Button, Avatar, Dropdown, theme } from 'antd';
import { UserOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { logout } from '@/features/auth/authSlice';
import { toggleSidebar } from '@/features/ui/uiSlice';
import { useRouter } from 'next/navigation';
import type { MenuProps } from 'antd';
import LanguageSwitcher from './LanguageSwitcher';

const { Header } = Layout;

export default function DashboardHeader() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { sidebarOpen } = useAppSelector((state) => state.ui);
  const { user } = useAppSelector((state) => state.auth);
  const { token } = theme.useToken();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <Header style={{ background: token.colorBgContainer }} className="px-6 flex items-center justify-between">
      <Button
        type="text"
        icon={sidebarOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        onClick={() => dispatch(toggleSidebar())}
      />
      
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <Dropdown menu={{ items }} placement="bottomRight">
          <div className="flex items-center cursor-pointer">
            <span className="mr-3">{user?.name}</span>
            <Avatar icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}