import RegistationPage from "../support/page_object/registationPage";

const registrationPage = new RegistationPage()


describe('Registration', () =>{
    it('registration with valid credentials', () =>{
        cy.registration()

    })
})