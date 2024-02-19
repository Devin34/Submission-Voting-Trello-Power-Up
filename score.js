/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "estimate", window.scoreselect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("card", "shared", "estimate")
    .then(function (data) {
      window.scoreselect.value = data;
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});