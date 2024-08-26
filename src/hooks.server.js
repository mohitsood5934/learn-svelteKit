/** @type {import('@sveltejs/kit').Handle} */ 

export async function handle({
  event,
  resolve,
}) {
//   if (event.url.pathname.startsWith("/custom")) {
//     return new Response("custom response");
//   }
  console.log('Ran on server');
  event.locals.user = await getUser();
  const response = await resolve(event);
  return response;
}


async function getUser() {
    return {
        email: 'mohit@gmail.com'
    }
}