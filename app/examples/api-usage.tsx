'use client';

import { useApi } from '@/hooks/useApi';
import { Button, Card, Spin } from 'antd';
import { useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function ApiExample() {
  const { data, loading, error, request } = useApi<Todo[]>();

  const fetchTodos = async () => {
    await request({
      method: 'GET',
      url: '/todos',
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return (
      <Card>
        <p className="text-red-500">{error.message}</p>
        <Button onClick={fetchTodos}>Retry</Button>
      </Card>
    );
  }

  return (
    <Card title="API Example">
      <div className="space-y-4">
        {data?.map((todo) => (
          <div key={todo.id} className="p-4 border rounded">
            <h3 className="font-semibold">{todo.title}</h3>
            <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}