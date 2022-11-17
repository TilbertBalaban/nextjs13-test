'use client';

import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

const Search = () => {
  const router = useRouter();

  const handleSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const search = target.search.value;
    console.log('search', search);
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" />
      <button type="submit">Search btn</button>
    </form>
  );
};

export default Search;
