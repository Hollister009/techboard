<script>
  import Cell from './Cell.svelte';

  export let rows = [];
  let table = rows.map((item) => [item, null, null, null, null]);

  console.log(table);

  const onUpdate = (rowId) => (event) => {
    const { dropZoneId, item } = event.detail;
    table[rowId] = table[rowId].map((_, idx) =>
      idx === dropZoneId ? item : null
    );
  };
</script>

<div class="grid">
  {#each table as row, rowIdx}
    <div class="row">
      {#each row as item, index}
        <Cell {item} on:update={onUpdate(rowIdx)}>
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
