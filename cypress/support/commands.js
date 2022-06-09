import RegistationPage from "./page_object/registationPage";// ***********************************************
const registrationPage = new RegistationPage()


Cypress.Commands.add('registration', ()=> {
    cy.visit('/user/register')
    registrationPage.emailField().type(Math.random()*1000 +'test34@gmail.com')
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


