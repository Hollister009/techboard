<script>
  // const tableExample = [
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  //   ['Beginer', 'Competent', 'Advanced', 'Expert', 'Master'],
  // ];

  let table = [new Array(5).fill(null).map((_, index) => ++index)];
</script>

<main>
  <div class="container">
    <h1>Techboard:</h1>
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
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 20px;
  }

  .container {
    max-width: 1080px;
    margin: 0 auto;
  }

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
