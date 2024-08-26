<script>
	/** @type {import('./$types').ActionData} */
    import { enhance } from '$app/forms';
	export let form;
</script>

<h1>Contact Form</h1>
{#if form && form.success}
<h1>Message received</h1>
{:else}
<form use:enhance method="POST">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" />
  <br />
  {#if form && form.email}
  <p>{form.email}</p>
  {/if}
  <label for="message">Message</label>
  <textarea name="message" id="" cols="30" rows="10"></textarea>
  <br />
  {#if form && form.message}
  <p>{form.message}</p>
  {/if}
  <button type="submit">Send Message</button>
</form>

{/if}
