describe('SDET Challenge', () => {
    let goldenBars = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let weighings = [];
    let fakeGoldenBar;
    let dialogMessage;

    beforeEach(() => {
        cy.visit('/');
    });

    it('should open the SDET Challenge Site', () => {
        cy.title().should('eq', 'React App');
        cy.get('.game-board').should('have.length', 2).then((weighingPans) => {
            expect(weighingPans[0]).to.contain.text('left bowl');
            expect(weighingPans[1]).to.contain.text('right bowl');
        });
    });

    it('find out which three bars contain the fake ', () => {
        cy.enterBowls(goldenBars.slice(0, 3), goldenBars.slice(3, 6));
        cy.clickWeigh();

        cy.getWeighingResult(1).then(resultDetails => {
            cy.getResultOperator().then(resultOperator => {
                expect(resultOperator).to.not.equal('?');
                expect(resultDetails).to.contain(resultOperator);

                weighings.push(resultDetails);
                expect(weighings).to.have.length(1);

                if (resultOperator === '=') {
                    goldenBars = goldenBars.slice(6);
                } else if (resultOperator === '<') {
                    goldenBars = goldenBars.slice(0, 3);
                } else if (resultOperator === '>') {
                    goldenBars = goldenBars.slice(3, 6);
                }
            });
        });
    });

    it('should get rid of 2 out of 3 suspect bars', () => {
        cy.resetBowls();

        cy.enterBowls([goldenBars[0]], [goldenBars[1]]);
        cy.clickWeigh();

        cy.getWeighingResult(1).then(resultDetails => {
            cy.getResultOperator().then(resultOperator => {
                expect(resultOperator).to.not.equal('?');
                expect(resultDetails).to.contain(resultOperator);

                weighings.push(resultDetails);
                expect(weighings).to.have.length(2);

                if (resultOperator === '=') {
                    fakeGoldenBar = `#coin_${goldenBars[2]}`;
                } else if (resultOperator === '<') {
                    fakeGoldenBar = `#coin_${goldenBars[0]}`;
                } else if (resultOperator === '>') {
                    fakeGoldenBar = `#coin_${goldenBars[1]}`;
                }

                cy.log('Selected fake golden bar:', fakeGoldenBar);
                cy.get(fakeGoldenBar).should('exist');
            });
        });
    });

    it('should guess the fake golden bar', () => {
        cy.on('window:alert', (txt) => {
            dialogMessage = txt;
        });

        cy.clickFakeGoldenBar(fakeGoldenBar);

        cy.wrap(null).then(() => {
            cy.log(`Dialog message: ${dialogMessage}`);
            if (dialogMessage === 'Oops! Try Again!') {
               cy.log('Weighings:', weighings);
                cy.get(fakeGoldenBar).invoke('text').then((text) => {
                    cy.log(`Fake Golden Bar: ${text}`);
                });
                cy.log(`End-of-Game Message: ${dialogMessage}`);
            } else {
                cy.log('Yay! You found it!');
            }
        });
    });
});




