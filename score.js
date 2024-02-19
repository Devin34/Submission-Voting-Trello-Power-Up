/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var cardid;


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
    .card("id")
    .then(function(cardidvalue) {
      cardid = cardidvalue;
    })
    .get("member", "shared", cardid)
    .then(function (score) {
      window.scoreselect.value = score;
      console.log("TEST");
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});