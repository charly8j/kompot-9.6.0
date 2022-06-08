import BasePage from "../support/page_object/basePage";
import LoginPage from "../support/page_object/loginPage";
const basePage = new BasePage()
const loginPage = new LoginPage()

describe('LOGIN', function () {
    it('Login Btn',function (){
      cy.login()

    })
});