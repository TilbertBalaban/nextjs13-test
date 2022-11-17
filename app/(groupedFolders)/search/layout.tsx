import React from 'react';
import Search from './Search';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <h1>Search...</h1>
      <Search />

      <div className="">{children}</div>
    </main>
  );
};

export default Layout;
