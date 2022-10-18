# Wise calculator

### [Deployment](https://lnicepei.github.io/wise-calculator)

### How to run the app

1. Clone this repository by running `$ git clone https://github.com/lnicepei/wise-calculator`
2. Run `cd calculator`
3. Run `npm i`
4. Run `npm run start`

### Other scripts

* `npm run lint` wil run [eslint](https://eslint.org/) in the source folder
* `npm run test` will run all the tests for mathematical commands(operations) using `jest.config.js` file
* `npm run prettier:check` will use [prettier](https://prettier.io/) to check for the code that does not match rules set in `.prettierrc` file
* `npm run prettier:fix` will fix all the issues found during the previous step

### Project info and structure of folders

* The logic of this app has the Command Pattern as its core. Such approach not only allows to decouple methods from objects that execute the operation, gives the developer more control over the commands that have a certain lifespan, but also makes it possible to undo the commands that could not be undone using other popular approaches.
* One instance of `Calculator` is shared throughout the app. It gets imported from `calculator` folder
* New commands should be created in the `operations` folder
* `buttons` folder contains `numbers.js` file, the scripts of which handle click events of digits on the screen.
* `operations` folder is divided into `arithmeticOperations` and `advancedOperations` subfolders. The first one is responsible for keeping such operations as `=, +, *, /,-` and tests for them. The second one is filled with the following operaions: `2√x, 3√x, 1/x, y^x, y√x, %, +/-, mr, mc, m+, m-, 10^x, x^2, x^3`. This folder also keep appropriate tests for those mathematical operations.
* `screen` folder is responsible for keeping DOM-related files, such as `updateScreen.js` and `toggleTheme.js`. 
