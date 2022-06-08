import RegistationPage from "../support/page_object/registationPage";

const registrationPage = new RegistationPage()


describe('Registration', () =>{
    it('registration with valid credentials', () =>{
        cy.visit('https://kompot.us/user/register')
        registrationPage.emailField().type('test30@gmail.com')
        registrationPage.passwordField().type('Qwerty123')
        registrationPage.createBtn().click()
        registrationPage.fullNameField().type('Boris')
        registrationPage.phoneNumber().type(2345678876)
        registrationPage.createBtn().click()
        registrationPage.companyField().type('Happy')
        registrationPage.primaryIndustryField('JH')
        registrationPage.companySizeSelected('Only me')
        //registrationPage.createBtn().click()






    })
})