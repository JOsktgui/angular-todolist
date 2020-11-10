import { ReactiveVar } from '@apollo/client/core';
import { Task } from '../../cache';

export default (todosVar: ReactiveVar<Task[]>) => {
  const createNewTodoId = (allTodos: Task[]) => {
    return allTodos.reduce((maxId: number, todo: Task) => Math.max(todo.id, maxId), -1 ) + 1;
  };

  const createNewTodo = (text: string, allTodos: Task[]) => {
    return { text, completed: false, id: createNewTodoId(allTodos) };
  };

  return (text: string) => {
    const allTodos = todosVar();
    todosVar(allTodos.concat([createNewTodo(text, allTodos)]));
  };
};
