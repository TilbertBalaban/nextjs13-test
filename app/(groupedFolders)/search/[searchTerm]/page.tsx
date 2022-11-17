import React from 'react';
import { Todo } from '../../../../types';


type Props = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?title_like=${searchTerm}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  const data: Todo[] = await response.json();
  if (Math.random() > 0.5) {
    throw new Error('Random error');
  }
  return data;
};

const SearchItem = async ({ params: { searchTerm } }: Props) => {
  const searchResults = await search(searchTerm);
  console.log('qqq', searchResults);
  return (
    <section>
      <h1>
        Search results for <b>{searchTerm}</b>
      </h1>
      <ol>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ol>
      ;
    </section>
  );
};

export default SearchItem;
