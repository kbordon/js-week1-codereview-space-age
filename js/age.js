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
    this.ageSeconds = (Date.now() - this.dobDate.getTime())/1000;
    this.age;
    this.lifeExpectancy;
  }

  setAge(){
     this.ageSeconds = (Date.now() - this.dobDate.getTime())/1000;
     this.age = Math.floor(this.ageSeconds*60*60*24*365);
  }


}
