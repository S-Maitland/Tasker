// describe('My First Test', () => {
//   it('Visits the Tasker App', () => {
//     cy.visit('/')
//   })
// })

// describe('My Second Test', () => {
//   it('Finds the content "Docs"', () => {
//     cy.visit('/')

//     cy.contains('Docs')
//   })
// })

describe('My Third Test', () => {
  it('Clicks the link "Docs"', () => {
    cy.visit('/')

    cy.contains('Docs').click()
  })
})

// describe('My Fourth Test', () => {
//   it('clicking "Docs" navigates to a new url', () => {
//     cy.visit('/')

//     cy.contains('Docs').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', 'create-next-app')
//   })
// })

// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })