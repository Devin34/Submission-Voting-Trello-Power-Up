/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "score", window.scoreselect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .get("card", "shared", "score")
    .then(function (score) {
      window.scoreselect.value = score;
      
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});