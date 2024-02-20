/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var cardIDString;


window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t
    .set("member", "shared", "cardIDString", window.scoreselect.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
  return t
    .card("id")
    .then(function(cardID) {
      cardIDString = JSON.stringify(cardID.id);
    
    })
    .get("member", "shared", "cardIDString")
    .then(function (score) {
      window.scoreselect.value = score;
      //console.log(cardIDString);
    })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});