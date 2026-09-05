/** @type {Record<string, {name: string, rates: Record<string, string>}>} */
const customPrices = {
  brucey: {
    name: "Bruce",
    rates: {
      dayCare: "£25",
      boarding: "£45",
    },
  },
  shooby: {
    name: "Nikko",
    rates: {
      boarding: "£45",
    },
  },
  gracey: {
    name: "Grace",
    rates: {
      boarding: "£40",
      boardingHalf: "£20",
    },
  },
};

var renderCustomPrices = function (/** @type {string} */ petCode) {
  const el = document.getElementById("customPrice");
  if (!el) {
    console.log("couldn't find customPrice");
    return;
  }

  const priceData = customPrices[petCode];
  if (!priceData) {
    el.textContent = `No custom pricing found for code '${petCode}'`;
    el.style.visibility = "visible";
    return;
  } else {
    el.textContent = `(Showing custom prices for ${priceData.name})`;
    el.style.visibility = "visible";
  }

  for (const [key, value] of Object.entries(priceData.rates)) {
    const span = document.getElementById(key);
    if (span) {
      span.textContent = value;
    }
  }
};

const p = new URLSearchParams(window.location.search).get("p");
if (p) {
  renderCustomPrices(p);
}
