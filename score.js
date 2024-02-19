/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.estimate.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "estimate", window.estimateSize.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("card", "shared", "estimate")
    .then(function (data) {
      window.estimateSize.value = data;
    })
    .then(function () {
      t.sizeTo("#estimate").done();
    });
});