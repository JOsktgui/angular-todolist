
import { InMemoryCache, makeVar, ReactiveVar } from '@apollo/client/core';

export interface Task {
  id: number;
  completed: boolean;
  text: string;
}

const tasksInitialValue: Task[] = [
  {
    id: 0,
    completed: false,
    text: 'Set store with angular',
  },
];

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        tasks: {
          read: () => taskReactiveVar()
        }
      }
    }
  }
});


export const taskReactiveVar: ReactiveVar<Task[]> = makeVar<Task[]>(tasksInitialValue);
