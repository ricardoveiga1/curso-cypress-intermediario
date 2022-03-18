 /// <reference types="Cypress" />

 const acessToken = Cypress.env('gitlab_access_token')

 Cypress.Commands.add('api_createProject', project => {
    cy.request({
        method: 'POST',
        url: `api/v4/projects/?private_token=${acessToken}`,
        body: { 
            name: project.name,
            description: project.description,
            initialize_with_readme: true
        }
    })
})

Cypress.Commands.add('api_createProjectOrtherWay', (name, desc, read) => {
    cy.request({
        method: 'POST',
        url: `api/v4/projects/?private_token=${acessToken}`,
        body: { 
            name: name,
            description: desc,
            initialize_with_readme: read
        }
    })
})