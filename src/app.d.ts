// See https://kit.svelte.dev/docs/types#app

import type { Dayjs } from "dayjs";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface ToDoItem {
		id: string;
		title: string;
		date: Dayjs;
		isDone: boolean;
	}
}

export { };
