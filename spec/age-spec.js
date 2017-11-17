import { Age } from './../js/age.js';

describe('Age', function(){
  let testAge;

  it('it will create an Age object, and set to the age property', function(){
    testAge = new Age(27);
    expect(testAge.age).toEqual(27);
  })

  it('it will create get the age in seconds', function(){
    testAge = new Age(27);
    expect(testAge.ageSeconds).toEqual(851472000);
  })

})

describe('Birthdate', function(){
  // let testDOB;
  //
  // beforeEach(function() {
  //   testDOB = "1990-07-17";
  // });
  //
  // it('it will create a Birthdate object from a date and create a')
  //
  // it('it will get the years in seconds from a birthdate', function(){
  //   let testBirthdate = new Birthdate(testDOB);
  // });

})
