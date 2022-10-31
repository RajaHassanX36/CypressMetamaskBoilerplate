/// <reference types="Cypress"/>

import Base from '../pageObjects/Base';
import Wallet from '../pageObjects/Wallet';
import Page_1 from '../pageObjects/Page_1';
describe('Testing Dashboard', () => {
    const base = new Base();
    const page1 = new Page_1();
    const wallet = new Wallet();

    //write test cases here...

    it('Visit Dashboard', () => {
        base.visitlandingpage()
        cy.contains('')
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess()
            .should("be.true");
        cy.switchToCypressWindow();
    })
    
    it('Verify title', () => {
         cy.title()
            .should('eq', '');
    })

    it('Verifying twitter url', () => {
        base.verifyTwitterUrl()
    })

    it('Verifying medium url', () => {
        base.verifyMediumUrl()
    })

    it('Verifying telegram url', () => {
        base.verifyTelegramUrl()
    })

    it('Verifying linkedin url', () => {
        base.verifyLinkedinUrl()
    })   

})