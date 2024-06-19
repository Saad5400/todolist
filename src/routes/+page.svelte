<script lang="ts">
    import dayjs from "dayjs";
    import "dayjs/locale/ar";
    import relativeTime from 'dayjs/plugin/relativeTime'

    import { toDoList } from "$lib/stores/toDoList";

    dayjs.locale("ar");
    dayjs.extend(relativeTime);

    let title: string;

    function add() {
        toDoList.update((list) => {
            list.push({
                id: generateId(),
                title: title,
                date: dayjs(),
                isDone: false,
            });
            return list;
        });
        title = "";
    }

    function remove(id: string) {
        toDoList.update((list) => {
            let item = list.find((item) => item.id === id)!;
            let index = list.indexOf(item);
            list.splice(index, 1);
            return list;
        });
    }

    function generateId() {
        return (
            Date.now().toString(36) + Math.random().toString(36).substring(2)
        );
    }
</script>

<main class="p-16 max-w-screen-lg mx-auto flex flex-col gap-8 min-h-[100dvh]">
    <section class="flex justify-between">
        <div class="flex flex-col gap-2">
            <h2 class="text-4xl">
                {dayjs().format("a") === "ص" ? "صباح" : "مساء"} الخير 👋
            </h2>
            <h3 class="text-xl text-base-content/70">
                اليوم {dayjs().format("dddd D MMMM YYYY")}
            </h3>
        </div>
        <div>
            <select
                class="select select-bordered w-full max-w-xs pe-10 ps-4 bg-white"
            >
                <option>كل الاوقات</option>
                <option>اليوم</option>
            </select>
        </div>
    </section>
    <section class="join w-full">
        <input
            bind:value={title}
            class="input input-bordered join-item w-full bg-white"
            placeholder="عنوان المهمة"
        />
        <button on:click={add} class="btn btn-primary join-item rounded-r-full"
            >اضافة</button
        >
    </section>
    <section class="flex-1 flex">
        {#if $toDoList.length === 0}
            <div class="flex-1 flex flex-col justify-center items-center">
                <img
                    src="/tree.svg"
                    alt="no tasks left"
                    class="w-48 h-48 grayscale"
                />
                ما عندك مهام متبقية!
            </div>
        {:else}
            <ol class="w-full flex flex-col gap-4">
                {#each $toDoList as toDoItem}
                    <li class="w-full flex bg-white rounded-lg p-2">
                        <div class="flex-1 flex items-center gap-2">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-primary"
                            />
                            <span>
                                {toDoItem.title}
                            </span>
                        </div>
                        <!-- <button
                            on:click={() => remove(toDoItem.id)}
                            class="btn btn-error"
                        >
                            حذف
                        </button> -->
                        <div class="flex gap-1">
                            <button class="btn btn-xs h-6">
                                {dayjs().to(dayjs(toDoItem.date))}
                            </button>
                            <button class="btn btn-xs h-6 w-6 p-[0.125rem]">
                                <svg
                                    class="text-base-content/50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    ><circle
                                        cx="16"
                                        cy="8"
                                        r="2"
                                        fill="currentColor"
                                    /><circle
                                        cx="16"
                                        cy="16"
                                        r="2"
                                        fill="currentColor"
                                    /><circle
                                        cx="16"
                                        cy="24"
                                        r="2"
                                        fill="currentColor"
                                    /></svg
                                >
                            </button>
                        </div>
                    </li>
                {/each}
            </ol>
        {/if}
    </section>
</main>
