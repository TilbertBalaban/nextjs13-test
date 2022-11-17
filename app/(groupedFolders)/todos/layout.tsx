import React, { Suspense } from 'react';
import { TodoList } from './TodoList';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <Suspense
        fallback={
          <div className="flex-1 flex justify-center items-center">
            <div className="text-2xl">Loading...</div>
          </div>
        }
      >
        <div>
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>

      <div className="flex-1">{children}</div>
    </main>
  );
};

export default Layout;
