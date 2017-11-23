export class Age {
  constructor(input) {
    this.age = input;
    this.ageSeconds = input * 365 * 24 * 60 * 60;
    // the above does not account for leap years
    this.dobDate = new Date(input);
    // console.log(this.dobDate.getDate());
  }

}

export class Background{
  constructor(gender = "", eClass = "", region = "global"){
    this.region = region;
    this.eClass = eClass;
    this.gender = gender;
  }

  getLifeExpectancy(){
    const globalExpectancy = 71.66;
    let yearModifier = 1;
    // check region
    if (this.region != "global"){
      // lives in US
      yearModifier *= 0.910008382;

      // check economic class only for US
      if (this.eClass === "high") {
        if (this.gender === "female"){
          yearModifier *= 0.88;
        } else {
          yearModifier *= 0.86;
        }
      } else if (this.eClass === "middle"){
        yearModifier *= 0.95;
      } else if (this.eClass === "low") {
        if(this.gender ==="female"){
          yearModifier *= 1.03;
        }
      }
    }
    // check gender
    if (this.gender === "female") {
      yearModifier *= 0.97;
    } else if (this.gender === "male") {
      yearModifier *= 1.03;
    }
    return Math.round(globalExpectancy/yearModifier);
  }
}

export class Birthdate {
  constructor(bDayString, lifeExpectancy){
    this.dob = bDayString;
    this.dobDate = new Date(bDayString);
    this.ageSeconds;
    this.age;
    this.lifeExpectancy = lifeExpectancy;
  }

  setAge(){
    // Gets the difference between birthdate and current time, and converts to seconds and years. Then sets to those results to the Birthdate's properties.
    // For testing purposes, replace Date.now() with 1510951570847 which is the .getTime result of the time this app was created.
    let timeDiffInSeconds = (Date.now() - this.dobDate.getTime())/1000;
    this.ageSeconds = timeDiffInSeconds;
    this.age = Math.floor(timeDiffInSeconds/(365*24*60*60));
  }

  getAge(seconds){
    return Math.floor(seconds/(365*24*60*60));
  }

  getPlanetYrs(){
    // for refactoring
    const planetRatios = [0.24,0.62,1.88,11.86];
    let planetYrs = [];
    for (let i = 0; i < 4; i++){
      planetYrs.push(this.getAge(this.ageSeconds/planetRatios[i]));
    }
    return planetYrs;
  }

  getMercuryYrs(){
    let mercYSec = (this.ageSeconds/0.24);
    return this.getAge(mercYSec);
  }

  getVenusYrs(){
    let venYSec = (this.ageSeconds/0.62);
    return this.getAge(venYSec);
  }

  getMarsYrs(){
    let marsYSec = (this.ageSeconds/1.88);
    return this.getAge(marsYSec);
  }

  getJupiterYrs(){
    let jupYSec = (this.ageSeconds/11.86);
    return this.getAge(jupYSec);
  }

  getYearsLeft(number){
    const planetRatios = [0.24,0.62,1.88,11.86];
    let yearsLeft = this.lifeExpectancy - this.age;
    return Math.round(yearsLeft /= planetRatios[number]);
  }

  getTimeBeforeNextBday(number){
    const planetRatios = [0.24,0.62,1.88,11.86,1];
    let currentTime = new Date();
    let upcomingBD = (new Date(this.dob));
    upcomingBD.setFullYear(currentTime.getFullYear());
    if (upcomingBD.getTime() < currentTime.getTime()){
      upcomingBD.setFullYear(currentTime.getFullYear() + 1);
    }
    let timeBeforeBday = upcomingBD.getTime() - currentTime.getTime();
    return Math.floor((timeBeforeBday/(1000*60*60*24))/planetRatios[number]);
  }

}
