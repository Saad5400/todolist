<script lang="ts">
    interface ToDoItem {
        title: string;
        date: Date;
        isDone: boolean;
    }

    let toDoList: ToDoItem[] = [];

    function clicked() {}
</script>

<button on:click={clicked} class="btn btn-lg btn-primary"
    >Welcome to SvelteKit</button
>
