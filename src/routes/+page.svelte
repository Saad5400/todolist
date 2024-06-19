<script lang="ts">
    import dayjs from "dayjs";
    import "dayjs/locale/ar";

    dayjs.locale("ar");

    let toDoList: ToDoItem[] = [];

    let title: string;
    let date: Date;

    function add() {
        toDoList.push({
            id: generateId(),
            title: title,
            date: date,
            isDone: false,
        });
        toDoList = toDoList;
        title = '';
    }

    function remove(id: string) {
        let item = toDoList.find((item) => item.id === id)!;
        let index = toDoList.indexOf(item);
        toDoList.splice(index, 1);
        toDoList = toDoList;
    }

    function generateId() {
        return (
            Date.now().toString(36) + Math.random().toString(36).substring(2)
        );
    }
</script>

<!-- 
{#if toDoList.length === 0}
    <div>You have no tasks</div>
{:else}
    {#each toDoList as toDoItem}
        <div class="text-5xl">
            {toDoItem.title}
            <button on:click={() => remove(toDoItem.id)} class="btn btn-error">
                حذف
            </button>
        </div>
    {/each}
{/if} -->

<main class="p-16 max-w-screen-lg mx-auto flex flex-col gap-8">
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
            <select class="select select-bordered w-full max-w-xs pe-10 ps-4 bg-white">
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
</main>
