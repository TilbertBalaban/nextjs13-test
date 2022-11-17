import Link from 'next/link';
import { Todo } from '../../types';

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data: Todo[] = await response.json();
  return data;
};

const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <nav>
      <ul>
        {todos.splice(0, 15).map((todo) => (
          <li key={todo.id} className="text-red-700">
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { TodoList };
