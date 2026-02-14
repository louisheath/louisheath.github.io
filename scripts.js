/** @type {Record<string, string>} */
const customPrices = {
  brucey: "Bruce's daycare rate is £25, boarding £45",
  shooby: "Nikko boarding rate is £45",
  grace: "Grace's boarding rate is £40",
};

const p = new URLSearchParams(window.location.search).get("p");
if (p && customPrices[p]) {
  const el = document.getElementById("customPrice");
  if (el) {
    el.textContent = `(${customPrices[p]})`;
    el.style.visibility = "visible";
  }
}
