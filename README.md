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
| It will take a person's birthdate, and give the difference between then and now in seconds.| User enters in form: <br>11-09-1987 | 947603658.203 |
| Take a person's age and return it Mercury years. | 30 | On Mercury, you're about 125 years old. |
| Take a person's age and return it Venus years. |30 | On Venus, you're about 48 years old. |
| Take a person's age and return it Mars years. |30 | On Mars, you're about 16 years old. |
| Take a person's age and return it Jupiter years. |30 | On Jupiter, you're about 2 years old. |
| Take a person's age, and calculate their years left based on life expectancy. | 30 | 42 |
| Take expected remaining years of person's age, and convert them to Mercury years. | 30 | Time Remaining: 175 years |
| Take expected remaining years of person's age, and convert them to Venus years. | 30 | Time Remaining: 68 years |
| Take expected remaining years of person's age, and convert them to Mars years. | 30 | Time Remaining: 22 years |
| Take expected remaining years of person's age, and convert them to Jupiter years. | 30 | Time Remaining: 4 years |
| If User's current age surpasses their life expectancy, message showing remaining years changes to reflect that. | User enters: <br> 11/18/1900 | Display shows: <br> Persisted By: 187 years |



## Known Bugs
* This application does not account for leap years, so a person's age or calculation may be technically off by a few days.

## Other Comments
* The algorithm used to calculate a person's life expectancy is based on the information provided by *World Bank* life expectancy data found [here](https://www.google.com/publicdata/explore?ds=d5bncppjof8f9_&ctype=l&strail=false&bcs=d&nselm=h&met_y=sp_dyn_le00_in&scale_y=lin&ind_y=false&rdim=region&idim=country:USA:JPN:CAN&ifdim=region&tdim=true&hl=en&dl=en&ind=false), and a *Washington Post* article regarding social economic classes found [here](https://www.washingtonpost.com/news/wonk/wp/2015/09/18/the-government-is-spending-more-to-help-rich-seniors-than-poor-ones/?utm_term=.65d3af6ceef9). It was crafted off a cursory understanding of the material, and **by no means** should be taken seriously.

## Contact
If you have any questions, comments, or concerns, please contact Kimberly at [kbordon@gmail.com](mailto:kbordon@gmail.com).

## Technology Used
* Node JS
* Gulp
* Bower
* Jasmine
* Karma
* ... and many more packages. In top level of project folder, open `package.json` and `bower.json` in Atom (or your preferred text editor) and look for `"devDependencies"` and `"dependencies"` respectively to see the entire list.

## License
*This software is licensed under the MIT license.*

Copyright © 2017 **Kimberly Bordon**
