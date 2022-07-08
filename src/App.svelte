<script>
  import Grid from './lib/Grid.svelte';
  let table = [new Array(5).fill(null).map((_, index) => ++index)];
</script>

<main>
  <div class="container">
    <h1>Techboard:</h1>
    <Grid {table} />
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
</style>
