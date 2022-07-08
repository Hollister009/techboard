<script>
  // [
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  // ];
  export let table = [];
</script>

<div class="grid">
  {#each table as row}
    <div class="row">
      {#each row as cell}
        <div class="cell">
          <span class="cell-content">{cell}</span>
        </div>
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

  .cell {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: crimson;
    min-height: 200px;
    flex-basis: 100%;
  }

  .cell-content {
    color: white;
    font-size: 80px;
  }
</style>
