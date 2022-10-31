/// <reference types="cypress-xpath" />
class Base{
//visit site
visitlandingpage(){
    cy.visit('');
}
// verify social links 
verifyTwitterUrl(){
    cy.contains('')
    .should('have.attr', 'href', '#Link')
}
verifyMediumUrl(){
    cy.contains('')
    .should('have.attr', 'href', '#link')
}
verifyTelegramUrl(){
    cy.contains('')
    .should('have.attr', 'href', '#link')
}
verifyLinkedinUrl(){
    cy.contains('')
    .invoke('attr', 'href')
    .should('eq', '#Link');
}
verifyButtons(){
    cy.get('').should('')
    
}


}
export default Base