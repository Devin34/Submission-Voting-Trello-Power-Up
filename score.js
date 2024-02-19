/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.scoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "scoreForm", window.scoreForm.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  t.sizeTo("#scoreForm").done();
});