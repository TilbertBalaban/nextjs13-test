import { notFound } from 'next/navigation';
import { Todo } from '../../../../types';

const fetchTodo = async ({ todoId }: { todoId: string }): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  const data: Todo = await response.json();
  return data;
};

type Props = {
  params: {
    todoId: string;
  };
};

const Todo = async ({ params: { todoId } }: Props) => {
  const todo = await fetchTodo({ todoId });

  if (!todo.id) notFound();

  return (
    <div>
      <h1>Todo: {todoId}</h1>
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;

export async function generateStaticParams() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: Todo[] = await response.json();

  const preTodos = todos.splice(0, 10);

  return preTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
