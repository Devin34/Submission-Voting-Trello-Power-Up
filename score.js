/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

document.getElementById("scoreform").addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("card", "shared", "score", document.getElementById("scoreselect").value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {

  return t
    .get("card", "shared", "score")
    .then(function (data) {
      document.getElementById("scoreselect").value = data;
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });

});