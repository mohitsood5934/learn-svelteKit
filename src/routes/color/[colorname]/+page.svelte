<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="box" style="background-color: {data.backgroundColor}"></div>

<style>
  .box {
    height: 200px;
    width: 200px;
  }
</style>
