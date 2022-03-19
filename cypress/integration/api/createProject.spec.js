 /// <reference types="Cypress" />

 const faker = require('faker')

 describe('Create Project', () => {
    it('successfully', () => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
        }
        console.log(project)
        
        cy.api_createProject(project)
       
        .then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(project.name)
            expect(response.body.description).to.equal(project.description)
            
            console.log(response)
        })
    })

    it('successfully Another Way', () => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            desc: faker.random.words(5),
            read: true
        }

        cy.api_createProjectOrtherWay(project.name, project.desc, project.read)
        //cy.api_createProjectOrtherWay("testFunc2", "Teste", true)

        .then(response => {
            console.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(project.name)
            expect(response.body.description).to.equal(project.desc)
        })
    })
})