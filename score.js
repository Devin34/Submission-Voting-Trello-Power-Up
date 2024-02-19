/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var cardid = t.card("id");

window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("member", "shared", cardid, window.scoreselect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("member", "shared", cardid)
    .then(function (score) {
      window.scoreselect.value = score;
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});