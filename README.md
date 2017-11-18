# Super Galactic Age Calculator
### BDD Javascript Code Review _11.17.2017_
#### By Kimberly Bordon

## Description
_This is an application that will determine a person's age, but by different planet years. The user will enter their birthdate, and also have the option of inputting other factors. After clicking submit button, their age in Mercury, Venus, Mars and Jupiter years will be displayed, as well as their expected remaining years also by respective planets._

## Setup/Installation
* Make sure you have [Node](https://nodejs.org/en/download/) and the npm (Node package manager, which should come automatically) installed.
* Go to this repository page, and clone the project.
* Navigate to top level folder of the cloned repository in terminal or powershell, and enter the following commands:
```
$ npm install
$ bower install
```
* In order to run test, run this command: `$ npm test`

* To build project, enter the following:
```
$ gulp build
$ gulp serve
```

* To build the project to be production ready, add the production flag to the build command like so:
`$ gulp build --production`


## Specs
|Behavior | Input | Output|
|-|-|-|
| Take a person's age in years and convert it into seconds. | 30 | 946080000 |
| It will take a person's birthdate, and give the difference between then and now in seconds.| User enters in form: <br>11-09-1987 | 946080000 (replace this with correct value) |
| Take a person's age and return it Mercury years. | | |
| Take a person's age and return it Venus years. | | |
| Take a person's age and return it Mars years. | | |
| Take a person's age and return it Jupiter years. | | |
| Take a person's age, and calculate their years left based on life expectancy. | | |
| Take expected remaining years of person's age, and convert them to Mercury years. | | |
| Take expected remaining years of person's age, and convert them to Venus years. | | |
| Take expected remaining years of person's age, and convert them to Mars years. | | |
| Take expected remaining years of person's age, and convert them to Jupiter years. | | |
| If User's current age surpasses their life expectancy, message showing remaining years changes to reflect that. | | |



## Known Bugs
-This application does not account for leap years, so a person's age or calculation maybe technically be off by a few days.



## Contact
If you have any questions, comments, or concerns, please contact Kimberly at [kbordon@gmail.com](mailto:kbordon@gmail.com).

## Technology Used
* Node JS
* Gulp
* Bower
* Jasmine
* Karma

## License
*This software is licensed under the MIT license.*

Copyright © 2017 **Kimberly Bordon**
