import { TodoBoard } from '@/features/todos';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <TodoBoard />
    </main>
  );
}
