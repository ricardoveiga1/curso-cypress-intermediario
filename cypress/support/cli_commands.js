/// <reference types="Cypress" />
//npx cypress run --spec cypress/integration/cli/gitClone.spec.js
Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '').replace('/', '')
  
    cy.exec(`cd temp/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
  })