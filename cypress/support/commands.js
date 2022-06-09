import RegistationPage from "./page_object/registationPage";
import LoginPage from "./page_object/loginPage";
const registrationPage = new RegistationPage();
const loginPage = new LoginPage();


Cypress.Commands.add('registration', ()=> {
    cy.visit('/user/register')
    registrationPage.emailField().type('engineeryulia@gmail.com')
    registrationPage.passwordField().type('Qwerty123')
    registrationPage.createBtn().click()
    registrationPage.fullNameField().type('Boris')
    registrationPage.phoneNumber().type(2345678876)
    registrationPage.createBtn().click()
    registrationPage.companyField().type('Happy')
    registrationPage.primaryIndustryField().type('JH')
    registrationPage.companySizeSelected('Only me')
    registrationPage.createBtn().click()
})
Cypress.Commands.add('login', ()=> {
    cy.visit('/user/login')
    loginPage.emailField().type('engineeryulia@gmail.com');
    loginPage.passwordField().type('Qwerty123');
    loginPage.loginBtn().click();
})

