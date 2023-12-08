# API_tests_JS_axios
API_tests_JS_axios

API_TESTS PROJECT SETUP
1. Create new folder for API_tests project on the PC
2. Open this folder in VC Code or etc.
3. Check installed versions for
node
 node -v
npm
 npm -version

4. Setup environment. Install dependencies (jest, babel, log4j, axios):
4.1 Open terminal in VS Code.
4.2 Initialize project: npm init -y
4.3 Install Jest: npm install --save-dev jest
4.4 Open file package.json
4.4.1 Change field "scripts", set command jest for run:
	"scripts": {
		"test": "jest"
	}
4.5 Add babel for Jest (Babel is a JavaScript compiler​)
npm install --save-dev babel-jest
4.6 Preset env (for running tests via jest) for using jest test runner
npm install --save-dev @babel/preset-env --save-dev
4.7 Add babbel configurations from the babel web-site: https://babeljs.io/setup#installation
4.7.1 from usage info select part like
"jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
  }
  }
4.7.2 add it to package.json file after scripts/before keywords
4.7.3 add file babel.config.json
4.7.4 add to file info from the web-site above from description for Create babel.config.json configuration file
{
    "presets": ["@babel/preset-env"]
  }

4.8 Install axios library (for API test on JS):
npm install axios  

4.9 Add 1st file with some code for 1st test for checking set configuration
(e.g. add lessonsApi.test.js file to new created folder for tests: src > tests > lessonsApi.test.js)

4.10 Run test and check result:
npm test
or
npm run test

*********************************************
//Powershell/bash useful commands notes:

//Run the test(s) on powershell/bush
npm run test
npm test
npm test <testFilename>
