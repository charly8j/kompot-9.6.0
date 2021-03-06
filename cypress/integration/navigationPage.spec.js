import NavigationPage from "../support/page_object/navigationPage";
const navigationPage = new NavigationPage()


describe('Navigation page', () =>{
    it('navigation page', () => {
        cy.login()
        navigationPage.logo().should('be.visible').contains('Kompot')
        // navigationPage.clientsTopMenu().should('be.visible').contains('Clients').click().wait(2000).go('back');
        // navigationPage.ordersTopMenu().should('be.visible').contains('Orders').click().wait(2000).go('back')
        // navigationPage.estimatesTopMenu().should('be.visible').contains('Estimates').click().wait(2000).go('back')
        // navigationPage.invoicesTopMenu().should('be.visible').contains('Invoices').click().wait(2000).go('back')
        // navigationPage.paymentsTopMenu().should('be.visible').contains('Payments').click().wait(2000).go('back')
        // navigationPage.scheduleTopMenu().should('be.visible').contains('Schedule').click().wait(2000).go('back')

        const topMenu =['Client', 'Order', 'Estimate', 'Invoice', 'Payment', 'Schedule']
        topMenu.forEach(el => cy.get(`[href*="/${el.toLowerCase()}"]`).should('be.visible').contains(`${el}`).click().wait(2000).go('back'))


    })
})
