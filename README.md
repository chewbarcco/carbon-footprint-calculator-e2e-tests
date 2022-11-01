# Carbon Footprint Calculator E2E Tests

This repository is an automation exercise for tests based on the web platform [EPA’s Carbon Footprint Calculator](https://www3.epa.gov/carbon-footprint-calculator/).
- Note: this is a simple, clear, and concise test automation approach for UI.

## Test approach, test scenarios and test data

For this test approach, I defined the average US energy consumption as test data. And I defined some test cases in two scenarios.
In the first scenario, I perform some validations on the home, in the people and zip code fields. Following main and exception flow to validate error messages. In the second scenario, I carry out a normal calculation flow until the end, validating the sum of the pre-defined values ​​used in the test.

Some acceptance criteria were described in gherkin language, just for exemplification and can be found in the [acceptance-criteria]() folder in the project root.

Some bugs found were described in detail in how to reproduce them just to exemplify. They can be found in the [bugs]() folder in the project root.

## Test automation

Based on my defined scenarios and test data approach, the tests were developed using the [Cypress](https://docs.cypress.io/guides/overview/why-cypress) framework.

## First setup

Double-check if you have [Node.js](https://nodejs.org/en/) already installed.

Install every dependency, so navigate to the project root folder and execute:

```bash
npm install
```

to download and install every dependency needed for the test execution.
This will create a `./node_modules` directory and install all the dependencies there.

## Running the tests on your local machine

Use the [npm scripts](https://github.com/chewbarcco/carbon-footprint-calculator-e2e-tests/blob/0c91247ec05aee44684e764139a4cf0620e68406/package.json#L2) defined on the `./package.json` file to run the tests.

- To execute the tests on cypress runner

```bash
npm run cypress
```

- To execute the test headless

```bash
npm run tests
```