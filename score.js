/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.score-form.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "score-form", window.score.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {

  return t
    .get("card", "shared", "score-form")
    .then(function (score) {
      window.score.value = score;
    })
    .then(function () {
      t.sizeTo("#estimate").done();
    });

});