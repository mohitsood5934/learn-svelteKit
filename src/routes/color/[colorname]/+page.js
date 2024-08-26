import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */ 
export function load({ params }) {
  if (params.colorname) {
    console.log(`Color is: ${params.colorname}`);
    return {
      backgroundColor: params.colorname,
    };
  }
  error(404, "Not found");
}
