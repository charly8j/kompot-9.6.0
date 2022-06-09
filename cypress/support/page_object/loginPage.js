export default class LoginPage{
    emailField = () =>  cy.get('[id="email"]')
    passwordField = () => cy.get('[id="password"]')
    loginBtn = () => cy.get('button[type="submit"]')

}