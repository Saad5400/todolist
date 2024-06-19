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

<!-- <div class="join">
    <input
        bind:value={title}
        class="input input-bordered join-item"
        placeholder="عنوان المهمة"
    />
    <button on:click={add} class="btn join-item rounded-r-full">اضافة</button>
</div>

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

<main class="p-16 max-w-screen-lg mx-auto">
    <section class="flex justify-between">
        <div>
            <h2 class="text-4xl mb-2">
                {dayjs().format("a") === "ص" ? "صباح" : "مساء"} الخير 👋
            </h2>
            <h3 class="text-xl text-base-content/70">
                اليوم {dayjs().format("dddd D MMMM YYYY")}
            </h3>
        </div>
        <div>
            <select class="select select-bordered w-full max-w-xs pe-10 ps-4">
                <option>كل الاوقات</option>
                <option>اليوم</option>
            </select>
        </div>
    </section>
</main>
