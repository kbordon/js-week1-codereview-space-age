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
    $("#earth-output, #planets-output,#fun-1,#fun-2,#fun-3").empty();
    $(".fun-facts-contain").removeClass('opt-hide');
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
    const planets = [`Mercury`, `Venus`, `Mars`, `Jupiter`, `Earth`];
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

    // fun facts display
    $(`#fun-1`).append(`<h4>Your next birthday will be in:</h4><p><span class='fun-big'>${newBirthdate.getTimeBeforeNextBday(4)}</span> days on Earth</p>`);
    for(let j = 0; j < 4;j++){
      let days = newBirthdate.getTimeBeforeNextBday(j);
      $(`#fun-1`).append(`<p><span class='fun-big'>${days}</span> days on ${planets[j]}</p>`);
    }
    $('#fun-2').append(`<p><span class='fun-big'>In the year 2073, the age of Keith Richards in dog years on the planet Jupiter will be...</span></p><h3>${newBirthdate.getSpecial()}</h3>`);
    $('#fun-3').append(`<span class='fun-big'>May flies live for 5 minutes</span><h3>${newBirthdate.getFlies(newBirthdate.ageSeconds).toLocaleString()}</h3>Number of may fly lifespans to your age<h3>${newBirthdate.getFlies().toLocaleString()}</h3>Number of may fly lifespans to the sun's age (5 billion years!)`);

  });

  $(`.fun-facts-tab button`).click(function(){
    $(`#earth-output,#planets-output`).toggleClass("un-focus");
    if($('.fun-facts-contain').hasClass('fun-facts-focus')) {
        $('#fun-facts').addClass('opt-hide');
        $('.fun-facts-contain').addClass('fun-facts-unfocus');
        $('.fun-facts-contain').removeClass('fun-facts-focus');
      } else {
        $('.fun-facts-contain').removeClass('fun-facts-unfocus');
        $('#fun-facts').removeClass('opt-hide');
        $('.fun-facts-contain').addClass('fun-facts-focus');
      }
  })
});
