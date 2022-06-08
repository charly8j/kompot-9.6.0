import BasePage from "../support/page_object/basePage";
const basePage = new BasePage()

describe('LOGIN', function () {
    it('Login Btn',function (){
        cy.visit("https://kompot.us")
        basePage.loginBtnBasePage().click()