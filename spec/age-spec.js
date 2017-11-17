import { Age, Birthdate, Background } from './../js/age.js';

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

describe('Background', function(){

  it('it will create a Background object with default values', function(){
    let newBG = new Background();
    expect(newBG.gender).toEqual("");
    expect(newBG.eClass).toEqual("");
    expect(newBG.region).toEqual("global");
  });

  it('it will create a Background object with different values', function(){
    let newBG = new Background("female","poor", "US");
    expect(newBG.gender).toEqual("female");
    expect(newBG.eClass).toEqual("poor");
    expect(newBG.region).toEqual("US");
  });

  it('it will return default life expectancy based on Background object', function(){
    let newBG = new Background();
    expect(newBG.getLifeExpectancy()).toEqual(72);
  });

  it('it will return US life expectancy based on US region', function(){
    let newBG = new Background("", "", "US");
    expect(newBG.getLifeExpectancy()).toEqual(79);
  });

  it('it will return US life expectancy based on rich male US background', function(){
    let newBG = new Background("male", "richest", "US");
    expect(newBG.getLifeExpectancy()).toEqual(89);
  });

  it('it will return US life expectancy based on global female background', function(){
    let newBG = new Background("female","","global");
    expect(newBG.getLifeExpectancy()).toEqual(74);
  });

  it('it will return US life expectancy based on rich US female background', function(){
    let newBG = new Background("female","richest", "US");
    expect(newBG.getLifeExpectancy()).toEqual(92);
  });

})

describe('Birthdate', function(){
  let testDOB;
  let testBirthdate;
  let testBG;

  beforeEach(function() {
    testDOB = "1990-07-17 00:00:00";
    testBirthdate = new Birthdate(testDOB);
    testBG = new Background()
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

  it('getYearsLeft will get years depending on default background and if Mercury chosen', function(){
    let lifeExp = testBG.getLifeExpectancy();
    let testBD2 = new Birthdate(testDOB, lifeExp);
    testBD2.setAge();
    expect(testBD2.getYearsLeft(0)).toEqual(188);
  });

  it('getYearsLeft will get years depending on default background and Venus chosen', function(){
      let lifeExp = testBG.getLifeExpectancy();
      let testBD2 = new Birthdate(testDOB, lifeExp);
      testBD2.setAge();
      expect(testBD2.getYearsLeft(1)).toEqual(73);

  });

  it('getYearsLeft will get years depending on default background and Mars chosen', function(){
      let lifeExp = testBG.getLifeExpectancy();
      let testBD2 = new Birthdate(testDOB, lifeExp);
      testBD2.setAge();
      expect(testBD2.getYearsLeft(2)).toEqual(24);

  });

  it('getYearsLeft will get years depending on default background and Jupiter chosen', function(){
      let lifeExp = testBG.getLifeExpectancy();
      let testBD2 = new Birthdate(testDOB, lifeExp);
      testBD2.setAge();
      expect(testBD2.getYearsLeft(3)).toEqual(4);

  });


})
