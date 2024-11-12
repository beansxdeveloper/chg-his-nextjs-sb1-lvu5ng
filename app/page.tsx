import { Button } from 'antd';
import { useApi } from '@/hooks/useApi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Next.js 14 + Ant Design 5
          </h1>
          <p className="text-xl mb-8 text-zinc-300">
            A modern web application template with the latest technologies
          </p>
          <div className="space-x-4">
            <Button type="primary" size="large">
              Get Started
            </Button>
            <Button size="large">Learn More</Button>
          </div>
        </div>
      </div>
    </main>
  );
}