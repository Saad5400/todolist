import { persisted } from 'svelte-persisted-store'

export const toDoList = persisted<ToDoItem[]>('toDoList', []);
