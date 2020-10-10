import { STORE_KEY } from "./Settings";

const POST_URL =
  "http://us-central1-test-b7665.cloudfunctions.net/api/stores/" +
  STORE_KEY +
  "/products/";

export const postRequest = async (product: any) => {
  let data: any = {};

  data["title"] = product.title;
  data["category"] = product.category;
  data["price"] = product.price;
  data["employee"] = product.employee;
  data["description"] = product.description;

  try {
    const response = await fetch(POST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const res = await response.json();

    return res;
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
    return 1;
  }
};

export const deleteRequest = async (productId: any) => {
  try {
    const response = await fetch(POST_URL + productId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    const res = await response.json();

    return res;
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
    return 1;
  }
};


