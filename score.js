/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "scoreform", window.scoreselect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {

  return t
    .get("card", "shared", "scoreform")
    .then(function (scoreform) {
      window.scoreselect.value = scoreform;
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });

});