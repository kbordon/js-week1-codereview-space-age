import { Age } from './../js/age.js';

describe('Age', function(){
  let testDOB;

  beforeEach(function() {
    testDOB = "1990-07-17";
  });

  it('it will create an Age object from a date string', function(){
    let testAge = new Age(testDOB);
    expect(testAge.dob).toEqual(testDOB);
  })
})
