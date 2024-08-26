// this function will load on both server (in case of SSR ) & client (in case of CSR)
// Often, a page will need to load some data before it can be rendered. For this, we add a +page.js module that exports a load function:
import { error } from "@sveltejs/kit";

export const csr = true;
export const ssr = false;

/** @type {import('./$types').PageLoad} */ 
export function load({ params }) {
  if(+params.id === 101) {
    throw error(401, { message: 'Person not found'});
  }
  // if (params.id) {
  //   console.log(`This is the id of th person - ${params.id}`);
  //   return {
  //     title: `Hello person ${params.id}`,
  //     content: "Welcome to our website. Lorem ipsum dolor sit amet...",
  //   };
  // }
  // error(404, "Not found");
}
