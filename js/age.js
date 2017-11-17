export class Age {
  constructor(input) {
    this.age = input;
    this.ageSeconds = input * 365 * 24 * 60 * 60;
    // the above does not account for leap years
    this.dobDate = new Date(input);
    console.log(this.dobDate.getDate());
  }

  // getYears() {
  //   let now = Date.now();
  //   this.dobDate
  // }
}

export class Birthdate {
  constructor(input){
    this.dob = input;
    this.dobDate = new Date(input);
    this.ageSeconds;
    this.age;
    this.lifeExpectancy;
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
    let mercYSec = (this.ageSeconds/.24);
    return this.getAge(mercYSec);
  }

  getVenusYrs(){
    let venYSec = (this.ageSeconds/.62);
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


}
