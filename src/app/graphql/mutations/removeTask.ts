import { ReactiveVar } from '@apollo/client';
import { Task } from '../../cache';

export default (todosVar: ReactiveVar<Task[]>) => {
  return (id: number) => {
    const allTodos = todosVar();
    const filteredTodos = allTodos.filter((todo: Task) => todo.id !== id);
    todosVar(filteredTodos);
  };
};
