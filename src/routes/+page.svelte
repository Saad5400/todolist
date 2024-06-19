<script lang="ts">
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
    }

    function remove(id: string) {
        let item = toDoList.find((item) => item.id === id)!;
        let index = toDoList.indexOf(item);
        toDoList.splice(index, 1);
    }

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
</script>

{#if toDoList.length === 0}
    You have no tasks
{:else}
    {#each toDoList as toDoItem}
        <div class="text-5xl">
            {toDoItem.title}
        </div>
    {/each}
{/if}
