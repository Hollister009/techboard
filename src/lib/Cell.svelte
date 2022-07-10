<script>
  import Item from './Item.svelte';

  let drop_zone;
  export let item = null;

  function handleDragOver() {}
  function handleDragLeave() {}
  function handleDragDrop() {}
</script>

<div
  class="cell"
  id="drop_zone"
  bind:this={drop_zone}
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
  on:drop={handleDragDrop}
>
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
