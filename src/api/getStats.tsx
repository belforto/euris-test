import { STORE_KEY } from "./Settings";

const STATS_URL="http://us-central1-test-b7665.cloudfunctions.net/api/stores/"+STORE_KEY+"/stats/categories"

export const categoryStats = async () => {
  try {
    const response = await fetch(STATS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const res = await response.json();
    console.log("-stats-",res);
    return res;
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
    return 1;
  }
};