'use client';

import { Card, Col, Row, Statistic, Typography } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { useAppSelector } from '@/lib/store/hooks';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export default function DashboardPage() {
  const { user } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();

  return (
    <div>
      <Title level={2} className="mb-6">
        {t('dashboard.welcome', { name: user?.name })}
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.stats.totalUsers')}
              value={1234}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.stats.totalOrders')}
              value={789}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.stats.revenue')}
              value={98765}
              prefix={<DollarOutlined />}
              precision={2}
              valueStyle={{ color: '#1677ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.stats.growth')}
              value={12.3}
              prefix={<LineChartOutlined />}
              suffix="%"
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}