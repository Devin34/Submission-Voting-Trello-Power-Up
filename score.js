/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var state = false;


window.scoreform.addEventListener("submit", function (event) {
  event.preventDefault();

  t.card("id").then(function (cardID) {

  
    t.set("member", "shared", cardID.id, window.scoreselect.value)
    .then(function () { console.log("I RUN"); })
    .then(function () {


      state = true;
      //t.get("member", "shared", cardID.id).then(function (score) { console.log(score); });

    });
 
  
  });

  return t;


});

t.render(function () {


  if (state = true) {
    t.card("id").then(function (cardID) {

  
      t.get("member", "shared", cardID.id)
      .then(function (score) { window.scoreselect.value = score; console.log(score); })
      .then(function () {
  
        //t.get("member", "shared", cardID.id).then(function (score) { console.log(score); });
  
      });
   
    
    });

    return t.sizeTo("#scoreform").done();

  } else {

    return t.sizeTo("#scoreform").done();

  }






});