'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { Button, Card, Space, Switch } from 'antd';
import { toggleSidebar, setTheme, addNotification } from '@/features/ui/uiSlice';
import { logout } from '@/features/auth/authSlice';

export default function ReduxExample() {
  const dispatch = useAppDispatch();
  const { sidebarOpen, theme } = useAppSelector((state) => state.ui);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  const handleAddNotification = () => {
    dispatch(
      addNotification({
        message: 'This is a test notification',
        type: 'info',
      })
    );
  };

  return (
    <Card title="Redux State Management Example" className="max-w-md mx-auto mt-8">
      <Space direction="vertical" className="w-full">
        <div className="flex justify-between items-center">
          <span>Sidebar Status:</span>
          <Switch
            checked={sidebarOpen}
            onChange={() => dispatch(toggleSidebar())}
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Theme:</span>
          <Switch
            checked={theme === 'dark'}
            onChange={handleToggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>

        <Button
          type="primary"
          onClick={handleAddNotification}
          className="w-full"
        >
          Add Test Notification
        </Button>

        <Button
          danger={isAuthenticated}
          onClick={() => dispatch(logout())}
          className="w-full"
        >
          {isAuthenticated ? 'Logout' : 'Not Authenticated'}
        </Button>
      </Space>
    </Card>
  );
}