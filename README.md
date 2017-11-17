## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.
  * It should also include WHERE they are defined and used in the project
  * It could include a short description of what each does for you

2. Specs
  * Take a person's age in years and convert it into seconds.
    * input: 30
    * output: 30 * (365 * 24 * 60 * 60) or (31,536,000)
    (or you can use moment?)
    * moment.duration(age, 'years').seconds();
  * take two dates and determine the difference, in seconds, between the two. get the bday and now time. use moment() for now time. then use string moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm"); should i use moment or just date?
        * 1990 10 30
        * bday - 2017 11 17 8:42 = in seconds
  * return age of human in mercury years.
    * 1990 10 30 mercury (select a radio button or ticky box?)
    * today - bday = seconds/(.24) to humanize?    
    * today - bday = seconds/(.62) Venus
    * today - bday = sec/(1.88) Mars
    * today - bday = sec/(11.86) Jupiter
  * how long do i have left to live on planet
    calculate expectancy (base * modifiers) - age = yearsLeft * planet modifier (and if this is negative, they already past their years left. sayyyyy immortality isn't just for diamond skinned vampire, you've outlived your life expectancy by blah blah years! )


3. Integration
  * index page with at least two js files, one for interface and the other backend
  * index will have a form that takes the birthdate (and time of birth if they know it? start with date.)
  * should return all values maybe with graphic of planet, next to information
    -planet graphic
    - 125 mercury years. you are expected to live 203 years more on mercury.
  * use moment.js

4. UX/UI
  * use bootstrap probably, and custom styles.

5. Polish
  * Refactor minor portion of...
  * Delete unused...
