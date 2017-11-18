import { Age, Birthdate, Background } from './../js/age.js';

$(document).ready(function(){
  $("#space-age").submit(function(event){
    $("#output").empty();
    event.preventDefault();
    let birthDateInput = $("#birthdate").val();
    let birthTimeInput = $("#birthtime").val();
    let genderInput = $("#gender").val();
    let regionInput = $("#region").val();
    let eclassInput = $("#e-class").val();
    alert(`${birthDateInput} @ ${birthTimeInput} gender: ${genderInput} region: ${regionInput} economic: ${eclassInput}`);

    let newDate = new Date(`${birthDateInput} ${birthTimeInput}`);
    let newBackground = new Background(genderInput, eclassInput, regionInput);
    let newBirthdate = new Birthdate(`${birthDateInput} ${birthTimeInput}`, newBackground.getLifeExpectancy());
    newBirthdate.setAge();

    let planetYears = newBirthdate.getPlanetYrs();
    const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
    let yearsLeft;
    let yearsLeftString = "";
    let planetYearsDisplay;
    for(let i = 0; i < 4; i++){
       yearsLeft = newBirthdate.getYearsLeft(i);
       alert(yearsLeft);
       if (yearsLeft < 1){
         yearsLeftString = `Persisted By: ${-yearsLeft} years`;
       } else if (planetYears[i] > 0){
         yearsLeftString = `Time Remaining: ${yearsLeft}`;
       }
       if (planetYears[i] > 0) {
         planetYearsDisplay = planetYears[i];
       } else {
         planetYearsDisplay = "less than a year";
       }
      $("#output").append(`<div class='col-lg-3'>
                            On ${planets[i]}, you're about ${planetYearsDisplay} old.
                            <p>${yearsLeftString}</p>
                            </div>`);
    };
  });
});
