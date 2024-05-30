describe("Recall Campaign Module ",()=>{
    it('Loginfunction',()=>{
        cy.visit("https://kia-biz-dev.qrsolutions.com.au/")

        cy.get('[name="email"]').type('admin@qrsolutions.com.au')
        cy.get('.psw-content > input').type('Pass@123')
        cy.get('.login-button').click({force:true})
        cy.wait(4000)

    })
    it("Recall campaign module",()=>{

        cy.get('[class="cdb-menu"]').contains('Recall Campaign').click({force:true})
        cy.wait(3000)
        cy.get('[class="text-center campaign-cycle cursor-pointer"]').last().click({force:true}) // select the last campaign number in list of page 
        cy.get('[class="d-flex  justify-content-between align-items-center"]').contains('Member List').click({force:true}) 
        cy.screenshot()


        
    })


    

})