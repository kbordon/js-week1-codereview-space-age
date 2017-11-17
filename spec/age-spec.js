import { Age, Birthdate } from './../js/age.js';

describe('Age', function(){
  let testAge;

  it('it will create an Age object, and set argument to the age property', function(){
    testAge = new Age(27);
    expect(testAge.age).toEqual(27);
  })

  it('it will create an Age object, and set argument to the age in seconds property', function(){
    testAge = new Age(27);
    expect(testAge.ageSeconds).toEqual(851472000);
  })

})

describe('Birthdate', function(){
  let testDOB;
  let testBirthdate;

  beforeEach(function() {
    testDOB = "1990-07-17 00:00:00";
    testBirthdate = new Birthdate(testDOB);
  });

  it('setAge will set the years in seconds from a birthdate', function(){
    testBirthdate.setAge();
    expect(testBirthdate.ageSeconds).toEqual(862753570.847)
  });

  it('setAge will set the years from a birthdate calculated from seconds and rounded down', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getAge(testBirthdate.ageSeconds)).toEqual(27);

  })

  it('getMercuryYrs will get the age of person in Mercury years', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getMercuryYrs()).toEqual(113);
  });

  it('getVenusYrs will get the age of person in Venus years', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getVenusYrs()).toEqual(44);
  });

  it('getMarsYrs will get the age of person in Mars years', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getMarsYrs()).toEqual(14);
  });

  it('getJupiterYrs will get the age of person in Jupiter years', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getJupiterYrs()).toEqual(2);
  });

  it('getPlanetYrs will get all the ages by the respective planets', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getPlanetYrs()[0]).toEqual(113);
    expect(testBirthdate.getPlanetYrs()[1]).toEqual(44);
    expect(testBirthdate.getPlanetYrs()[2]).toEqual(14);
    expect(testBirthdate.getPlanetYrs()[3]).toEqual(2);
  });

})
