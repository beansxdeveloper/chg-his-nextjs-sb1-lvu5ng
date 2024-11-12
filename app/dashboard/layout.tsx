'use client';

import { useAppSelector } from '@/lib/store/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Layout, Spin } from 'antd';
import DashboardSidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/Header';

const { Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout className="min-h-screen">
      <DashboardSidebar />
      <Layout>
        <DashboardHeader />
        <Content className="m-6 p-6 bg-white rounded-lg">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}