import { Age, Birthdate, Background } from './../js/age.js';

$(document).ready(function(){
  $("#space-age").submit(function(event){
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
    console.log(newBirthdate.age);

    let planetYears = newBirthdate.getPlanetYrs();
    const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
    for(let i = 0; i < 4; i++){
      $("#output").append(`<div class='col-lg-3'>
                            On ${planets[i]}, you're about ${planetYears[i]} old!
                            </div>`);
    }



  });
});
