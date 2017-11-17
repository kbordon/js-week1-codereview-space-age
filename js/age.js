export class Age {
  constructor(input) {
    this.age = input;
    this.ageSeconds = input * 365 * 24 * 60 * 60;
    // the above does not account for leap years
    this.dobDate = new Date(input);
    console.log(this.dobDate.getDate());
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
      if (this.eClass === "richest") {
        if (this.gender === "female"){
          yearModifier *= 0.88;
        } else {
          yearModifier *= 0.86;
        }
      } else if (this.eClass === "middle"){
        yearModifier *= 0.95;
      } else if (this.eClass === "poor") {
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
    // Date now can't be used for testing since it's constantly changing.
    // will use dummy date now for test purposes.
    let timeDiffInSeconds = (1510951570847 - this.dobDate.getTime())/1000;
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


}
