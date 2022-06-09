export default class BasePage {
    btnLogin =() => cy.get ('[data-qa="login"]')
    btnRegister = () => cy.get ('[data-qa="register"]').contains('Sign up')
    logo = () => cy.get('#logo')


}