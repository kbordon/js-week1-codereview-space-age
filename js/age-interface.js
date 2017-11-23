import { Age, Birthdate, Background } from './../js/age.js';

$(document).ready(function(){
  // addtional form toggle
  $("#optional-toggle").click(function(){
    $("#gender").val("");
    $("#region").val("global");
    $("#e-class").val("");
    $("#optional").toggleClass("opt-hide");
  });

  // main age form
  $("#space-age").submit(function(event){
    $("#earth-output, #planets-output").empty();
    event.preventDefault();
    let birthDateInput = $("#birthdate").val();
    let birthTimeInput = $("#birthtime").val();
    let genderInput = $("#gender").val();
    let regionInput = $("#region").val();
    let eclassInput = $("#e-class").val();
    // alert(`${birthDateInput} @ ${birthTimeInput} gender: ${genderInput} region: ${regionInput} economic: ${eclassInput}`);

    let newDate = new Date(`${birthDateInput} ${birthTimeInput}`);
    let newBackground = new Background(genderInput, eclassInput, regionInput);
    let newBirthdate = new Birthdate(`${birthDateInput} ${birthTimeInput}`, newBackground.getLifeExpectancy());
    newBirthdate.setAge();

    let planetYears = newBirthdate.getPlanetYrs();
    const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
    let yearsLeft;
    let yearsLeftString = "";
    let planetYearsDisplay;
    let earthYearsLeft;
    if ((newBirthdate.lifeExpectancy - newBirthdate.age) === 0 ) {
      earthYearsLeft = `and apparently you've hit the expected finish line! Who knows what's in store for you`;
    } else if ((newBirthdate.lifeExpectancy - newBirthdate.age) < 0 ) {
      earthYearsLeft = `and ${-(newBirthdate.lifeExpectancy - newBirthdate.age)} more years than expected! Immortality's not just for vampires and AI these days it seems`
    } else {
      earthYearsLeft = `with, for better or worse, about ${newBirthdate.lifeExpectancy - newBirthdate.age} to go but`;
    }
    $("#earth-output").append(`<h1>You've been on Earth for ${newBirthdate.age} years ${earthYearsLeft} ...</h1>`);
    for(let i = 0; i < 4; i++){
       yearsLeft = newBirthdate.getYearsLeft(i);
       // alert(yearsLeft);
       if (yearsLeft === 0){
         yearsLeftString = "";
       } else if (yearsLeft < 1){
         yearsLeftString = `Persisted By: ${-yearsLeft} years`;
       } else if (planetYears[i] > 0){
         yearsLeftString = `Time Remaining: ${yearsLeft} years`;
       }
       if (planetYears[i] > 0) {
         planetYearsDisplay = planetYears[i];
       } else {
         planetYearsDisplay = "less than a year";
       }
      $("#planets-output").append(`<div class='col-lg-3'>
                                    <br>
                                    <p class="fancy">On <strong>${planets[i]}</strong>, you're about <strong>${planetYearsDisplay}</strong> years old.<p>
                                    <p>${yearsLeftString}</p>
                                    <div id="${planets[i]}">
                                    </div>
                                  </div>`);
    };
  });
});
