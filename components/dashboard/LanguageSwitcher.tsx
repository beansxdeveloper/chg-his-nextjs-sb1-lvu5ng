'use client';

import { GlobalOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import type { MenuProps } from 'antd';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const items: MenuProps['items'] = [
    {
      key: 'th',
      label: 'ไทย',
      onClick: () => i18n.changeLanguage('th'),
    },
    {
      key: 'en',
      label: 'English',
      onClick: () => i18n.changeLanguage('en'),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button type="text" icon={<GlobalOutlined />} />
    </Dropdown>
  );
}