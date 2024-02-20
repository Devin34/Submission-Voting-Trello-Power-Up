/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t

    .card("id")
    .then(function (cardID) { t.set("member", "shared", cardID.id, window.scoreselect.value)})
    .then(function () { t.closePopup();});

});

t.render(function () {

  return t.sizeTo("#scoreform").done();

  /*
  .card("id")
  .then(function (cardID) {t.get("member", "shared", cardID.id)})
  .then(function (score) {window.scoreselect.value = score;})
  .then(function () {t.sizeTo("#scoreform").done();});
  */

});