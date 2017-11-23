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
    let newBG = new Background("female","low", "US");
    expect(newBG.gender).toEqual("female");
    expect(newBG.eClass).toEqual("low");
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
    let newBG = new Background("male", "high", "US");
    expect(newBG.getLifeExpectancy()).toEqual(89);
  });

  it('it will return US life expectancy based on global female background', function(){
    let newBG = new Background("female","","global");
    expect(newBG.getLifeExpectancy()).toEqual(74);
  });

  it('it will return US life expectancy based on rich US female background', function(){
    let newBG = new Background("female","high", "US");
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

  it('setAge will set the years in seconds from a birthdate, if testing, will fail. please see method for notes', function(){
    testBirthdate.setAge();
    expect(testBirthdate.ageSeconds).toEqual(862753570.847)
  });

  it('setAge will set the years from a birthdate calculated from seconds and rounded down', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getAge(testBirthdate.ageSeconds)).toEqual(27);

  })

  it('getMercuryYrs will get the age of person in Mercury years, if testing, will fail. please see method for notes', function(){
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

  it('getPlanetYrs will get all the ages by the respective planets. if testing, will fail. please see method for notes', function(){
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

  it('getYearsLeft will get years depending on default background and Venus chosen. if testing, will fail. please see method for notes', function(){
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

  it(`getTimeBeforeNextBday will get the amount of time in days before a person's upcoming birthday`, function(){
      expect(testBirthdate.getTimeBeforeNextBday(4)).toEqual(236); // For Earth Days
      expect(testBirthdate.getTimeBeforeNextBday(0)).toEqual(984); // For Mercury
      expect(testBirthdate.getTimeBeforeNextBday(1)).toEqual(380); // For Venus
      expect(testBirthdate.getTimeBeforeNextBday(2)).toEqual(125); // For Mars
      expect(testBirthdate.getTimeBeforeNextBday(3)).toEqual(19); // For Jupiter
  });

  it(`getSpecial will return Keith Richards age in 2073 in dog years on the planet Jupiter`, function(){
    expect(testBirthdate.getSpecial()).toEqual(55);
  });

  it(`getFlies will return the number of may fly lifespans that make up a person's age. if testing, will fail. relies on Date.now()`, function(){
    testBirthdate.setAge();
    expect(testBirthdate.getFlies(testBirthdate.ageSeconds)).toEqual(2877349);
  })

  it(`getFlies will return the number of may fly lifespans that make up the sun's age, if no age is provided`, function(){
    testBirthdate.setAge();
    expect(testBirthdate.getFlies()).toEqual(525600000000000);
  })

})
