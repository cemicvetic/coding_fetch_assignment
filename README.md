# 🧪 QA Automation Assignment

This repository contains a take-home coding challenge for a QA Automation role at Fetch. It is set to public, so anyone can view my solution.

## 📋 Prerequisites

Before you can run the program, ensure you have the following dependencies installed:

- **Node.js (>= 18.15.0)**

You can install Node.js by visiting the [official Node.js website](https://nodejs.org/) and downloading the latest LTS version.

## 📥 Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/cemicvetic/coding_fetch_assignment.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd coding_fetch_assignment
    ```

3. **Install the Project Dependencies**

    ```bash
    npm install
    ```

## 🚀 Running the Tests

To run my solution, use:

```bash
npx cypress run
 ```

## 🧩 Tests

should open the SDET Challenge Site: Make sure the title and game board are loaded correctly.

find out which three bars contain the fake: Creates a simulation to find out which three bars are fake.

should get rid of 2 out of 3 suspect bars: Pull the remaining suspect bars for further weighing.

should guess the fake golden bar: Use the previous results to guess the fake golden bar.

## 🛠️ Custom Commands

cy.enterBowls(leftValues, rightValues): Fills in left and right values.

cy.clickWeigh(): This clicks the weigh button.

cy.resetBowls(): Resets the bowls.

cy.getWeighingResult(nthResult): Gets the nth weighing result.

cy.getResultOperator(): Returns the operator.

cy.clickFakeGoldenBar(fakeGoldenBar): Clicks the fake golden bar.


