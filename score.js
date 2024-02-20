/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var ID = t.card("id").then(function(cardID) {
  console.log(JSON.stringify(cardID));
})


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
      window.scoreselect.value = score;
      
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});