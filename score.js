/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();

  t.card("id").then(function (cardID) { t.set("member", "shared", cardID.id, window.scoreselect.value);});

  return t
  .card("id")
  .then(function (cardID) { t.get("member", "shared", cardID.id).then(function (score) {console.log(score);})})
  .then(function () { t.closePopup();});

});

t.render(function () {

  return t.sizeTo("#scoreform").done();
  
  
});