// By default page will be server rendered , then it will be sent to the 
// client where it will be hydrated and then rendered 

export async function load({ fetch }) {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    return { posts };
}
