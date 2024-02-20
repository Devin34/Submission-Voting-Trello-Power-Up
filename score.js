/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t

    .card("id")
    .then(function (cardID) { t.set("member", "shared", cardID.id, window.scoreselect.value)})
    .get("member", "shared", cardID.id)
    .then(function (score) {console.log(score);})
    .then(function () { t.closePopup();});

});

t.render(function () {

  return t.sizeTo("#scoreform").done();
  
  
});