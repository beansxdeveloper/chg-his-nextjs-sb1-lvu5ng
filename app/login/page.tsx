'use client';

import { Card, Form, Input, Button, Typography, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/lib/store/hooks';
import { setCredentials } from '@/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { axios } from '@/lib/axios';

const { Title } = Typography;

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (values: LoginForm) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/auth/login', values);
      const { user, token } = response.data;
      
      dispatch(setCredentials({ user, token }));
      message.success('Login successful!');
      router.push('/dashboard');
    } catch (error) {
      message.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <Title level={2}>Welcome Back</Title>
          <Typography.Text type="secondary">
            Please sign in to continue
          </Typography.Text>
        </div>

        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Email" 
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}