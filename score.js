/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.estimate.addEventListener("submit", function (event) {
  event.preventDefault();
  return t



    .set("card", "shared", "scoreForm", window.scoreSelect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("card", "shared", "scoreFrom")
    .then(function (scoreForm) {
      window.scoreSelect.value = scoreForm;
    })
    .then(function () {
      t.sizeTo("#estimate").done();
    });
})