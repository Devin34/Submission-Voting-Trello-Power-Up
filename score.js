/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("member", "shared", "score", window.scoreselect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("member", "shared", "score")
    .then(function (score) {

      var key;
      t.card("id").then(function (cardID) { key = cardID.id}).done()

      console.log(typeof key);

      window.scoreselect.value = score;

    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});