import { POLYGON_API_KEY } from "$env/static/private";
import { PUBLIC_API_KEY } from "$env/static/public";
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  const stockName = params && params.stock; //AAPL
  console.log({ stockName });
  try {
    const url = `https://api.polygon.io/v2/aggs/ticker/${stockName}/range/1/day/2023-01-09/2023-01-09?apiKey=${POLYGON_API_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    if (json.status === "ERROR") {
      return {
        data: [],
        message: "ERROR",
      };
    }
    return {
      data: json,
      message: "SUCCESS",
    };
  } catch (error) {
    console.log(`Error occured while fetching data - ${error}`);
    return {
      data: [],
      message: "ERROR",
    };
  }
}
