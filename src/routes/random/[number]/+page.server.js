import { RANDOM_NUMBER } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export function load({ params, locals }) {
  let textMessage = "";
  console.log(locals);
  if (locals && locals.user && locals.user.email) {
    textMessage = `Hii ${locals.user.email} you have won this challenge`;
  } else if (params.number === RANDOM_NUMBER) {
    textMessage = "You have won this challenge";
  } else {
    textMessage = "You have lost this challenge";
  }

  return {
    data: textMessage,
  };
}
