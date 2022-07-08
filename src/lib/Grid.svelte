<script>
  import Cell from './Cell.svelte';

  export let rows = [];
  let table = rows.map((item) => [item, null, null, null, null]);

  console.log(table);
</script>

<div class="grid">
  {#each table as row}
    <div class="row">
      {#each row as item, index}
        <Cell {item}>
          {index + 1}
        </Cell>
      {/each}
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    grid-template-areas: 'r r r r r';
  }

  .row {
    grid-area: r;
    display: flex;
    gap: 10px;
  }
</style>
