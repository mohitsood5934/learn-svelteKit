<script>
    import { page } from '$app/stores';
    export let data;
</script>

<nav>
  <ul>
    <li>
        <a class:active={$page.url.pathname === '/'} data-sveltekit-preload-data  href="/">Home</a>
      </li>
    <li>
      <a class:active={$page.url.pathname === '/about'} data-sveltekit-preload-data href="/about">About</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/color/red'} data-sveltekit-preload-data  href="/color/red">Color</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/contact'} data-sveltekit-preload-data href="/contact">Contact</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/person/123'} data-sveltekit-preload-data href="/person/123">Person</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/random/123'} data-sveltekit-preload-data href="/random/123">Random</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/stock/AAPL'} data-sveltekit-preload-data href="/stock/AAPL">Stock</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/div'} data-sveltekit-preload-data href="/div">Form Challenge</a>
    </li>
    <li>
      <a class:active={$page.url.pathname === '/posts'} data-sveltekit-preload-data href="/posts">Posts</a>
    </li>
  </ul>
</nav>
<h1 style="text-align:center;">{data.name}</h1>
<main>
  <slot />
</main>
<!-- <h3>Pathname: {$page.url.pathname}</h3> -->

<style>
    nav {
        background-color: black;
    }
    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        overflow-x: scroll;
    }
    ul li {
        margin: 1rem;
    }
    ul li .active {
      background-color: red;
      padding: 0.5rem;
    }
    ul li a {
        color: #fff;
    }
</style>
