## Learn SvelteKit

### Documentation

https://kit.svelte.dev/

<hr />

### Creating app using sveltekit

npm create svelte@latest intro-site

<hr />

### Prefetching data in svelte

<ul>
<li>
 <b>data-sveltekit-preload-data:</b> It will cause the sveltekit to run the page's load data function as soon as the user hovers/touckes the link.<br /> <br />
   <b>It can have below options: </b>
   <ul>
   <li>
 <b >data-sveltekit-preload-data="hover" : </b> means that every link is preloaded on hover by default.
   </li>
   <li>
<b>data-sveltekit-preload-data="tap" :</b> means that every link is preloaded on click/tap by default.
   </li>

   </ul>
</li>
</ul>
<li>
<b>data-sveltekit-preload-code:</b> In case we do not want to preload the data for the link, we can pre load the code for the user.

It can take below 4 values:

  <ul>
   <li> <b>"eager"</b> means that links will be preloaded straight away</li>
      <li> <b>"viewport" </b>means that links will be preloaded once they enter the viewport</li>
         <li> <b>"hover" </b>- as above, except that only code is preloaded</li>
            <li>  <b>"tap" </b>- as above, except that only code is preloaded</li>
  </ul>
</li>

### Creating production build
   - npm run build
   - npm run preview (to preview the build)

### Routing
   - All files can run on the server
   - All files run on the client except +server files
   - +layout and +error files apply to subdirectories as well as the directory they live in
   - <b>+page.svelte</b>:A +page.svelte component defines a page of your app. By default, pages are rendered both on the server (SSR) for the initial request and in the browser (CSR) for subsequent navigation.

### Hooks in Svelte
   - 'Hooks' are app-wide functions you declare that SvelteKit will call in response to specific events, giving you fine-grained control over the framework's behaviour.

There are three hooks files, all optional:

 - src/hooks.server.js — your app's server hooks
 - src/hooks.client.js — your app's client hooks
 - src/hooks.js — your app's hooks that run on both the client and server
 
Code in these modules will run when the application starts up, making them useful for initializing database clients and so on.