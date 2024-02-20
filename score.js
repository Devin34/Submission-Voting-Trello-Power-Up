/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();

  t.card("id").then(function (cardID) {

  
    t.set("member", "shared", cardID.id, window.scoreselect.value)
    .then(function () { console.log("I RUN"); })
    .then(function () {

      t.get("member", "shared", cardID.id).then(function (score) { console.log(score); });

    });
 
  
  });

  return t;


});

t.render(function () {

  return t.sizeTo("#scoreform").done();


});