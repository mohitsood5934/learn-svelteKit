<script>
  // @ts-nocheck
  export let data;
  console.log(data, 'ye hai bhau data');
</script>
<h1>Stock Page</h1>
{#if data.data && data.data.results && data.data.results.length > 0}
  <h1>{data.data.ticker}</h1>
  <h3>High Price: {data.data.results[0].h}</h3>
  <h3>Low Price: {data.data.results[0].l}</h3>
{:else}
  <h1>No stocks found</h1>
{/if}
