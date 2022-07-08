<script>
  export let item = {};
</script>

<div class="item" draggable="true">{item.name ?? ''}</div>

<style>
  .item {
    display: inline-block;
    background-color: #fff3cc;
    border: #dfbc6a 1px solid;
    min-width: 50px;
    min-height: 50px;
    margin: 10px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    box-shadow: 2px 2px 2px #999;
    cursor: move;
  }
</style>
