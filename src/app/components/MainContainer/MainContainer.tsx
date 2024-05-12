import React from "react";
import axios from "axios";

function MainContainer() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&sort=market_cap";

  axios
    .get(url, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  return <div>MainContainer</div>;
}

export default MainContainer;
