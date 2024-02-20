/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();



window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();
  return t.card("id").then(function (cardID) {
    
    t.set("member", "shared", cardID.id, window.scoreselect.value).done();


  })
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {

  return t.card("id").then(function (cardID) {

    console.log(typeof cardID.id);

    t.get("member", "shared", JSON.stringify(cardID.id))
      .then(function (score) {

        window.scoreselect.value = score;

      }).done();

  })
    .then(function () {
      t.sizeTo("#scoreform").done();
    });
});