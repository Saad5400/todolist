<script lang="ts">
    import dayjs from "dayjs";
    import "dayjs/locale/ar";
    import { toDoList } from "$lib/stores/toDoList";

    dayjs.locale("ar");

    let title: string;
    let date: Date;

    function add() {
        toDoList.update((list) => {
            list.push({
                id: generateId(),
                title: title,
                date: date,
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
            <ol>
                {#each $toDoList as toDoItem}
                    <li class="text-5xl">
                        {toDoItem.title}
                        <button
                            on:click={() => remove(toDoItem.id)}
                            class="btn btn-error"
                        >
                            حذف
                        </button>
                    </li>
                {/each}
            </ol>
        {/if}
    </section>
</main>
