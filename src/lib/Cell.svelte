<script>
  import Item from './Item.svelte';

  export let item = null;
</script>

<div class="cell">
  {#if item}
    <Item {item} />
  {:else}
    <span class="cell-content">
      <slot />
    </span>
  {/if}
</div>

<style>
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
