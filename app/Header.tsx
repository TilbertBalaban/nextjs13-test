import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-200 p-3">
      <h1 className="text-center text-lg text-yellow-500">Header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/todos" className="ml-3">
          Todos
        </Link>
        <Link href="/search" className="ml-3">
          Search
        </Link>
      </nav>
    </header>
  );
};

export default Header;
