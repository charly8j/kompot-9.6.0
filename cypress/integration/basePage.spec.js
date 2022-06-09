import BasePage from "../support/page_object/basePage";
const basePage = new BasePage()

describe('LOGIN', function () {
    it('Login Btn',function (){
        cy.visit('/')
        basePage.logo().contains('Kompot')
        basePage.btnRegister().click()

        cy.visit('/')
        basePage.btnLogin().click();

    })
})
