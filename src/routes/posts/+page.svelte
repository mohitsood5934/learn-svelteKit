<script>
    export let data;
    let title = '';
    let body = '';
    let posts = data.posts || []; // Initialize posts reactively

    function addNewPost() {
        // here we can also call the api method to update item in database
        if (!title || !body) {
            console.log('Please enter both title and body');
        } else {
            let postObj = {
                title,
                body,
                id: posts.length + 1,
                userId: 1
            };
            posts = [...posts, postObj];
            title = '';
            body = '';
        }
    }
</script>

<ul>
    {#if posts.length > 0}
        {#each posts as post}
            <li>{post.title}</li>
        {/each}
    {:else}
        <li>No posts available</li>
    {/if}
</ul>

<h1>Add new post</h1>
<form on:submit|preventDefault={addNewPost}>
    <input type="text" bind:value={title} placeholder="Title" /> <br />
    <input type="text" bind:value={body} placeholder="Body" /> <br />
    <button type="submit">Add new post</button>
</form>
