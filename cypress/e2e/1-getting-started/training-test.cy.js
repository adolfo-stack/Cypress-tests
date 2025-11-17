
describe('ejemplos to-do app', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })
    it('Crear tarea', () => {
        const newTask = 'Tirar la basura'
        cy.get('[data-test=new-todo]').type(`${newTask}{enter}`)
        cy.get('.todo-list li')
            .last()
            .should('have.text', newTask)
    })
    it('Marcar tarea como completada', () => {
        cy.get('[data-test=new-todo]').type(`Tirar la basura{enter}`)
        cy.contains('Tirar la basura')
            .parent()
            .find('input[type=checkbox]')
            .check()
    })
    it('Desmarcar tarea completada', () => {
        cy.get('[data-test=new-todo]').type(`Tirar la basura{enter}`)
        cy.contains('Tirar la basura')
            .parents('li')
            .find('input[type=checkbox]')
            .check()
            .uncheck()
        cy.contains('Active').click()
    })
    it('Editar tarea', () => {
        cy.get('[data-test=new-todo]').type(`Tirar la basura{enter}`)
        cy.contains('Tirar la basura').dblclick()
        cy.get('input.edit').type('{selectall}{del}')
        cy.get('.todo-list li').last().type(`Lavar el coche{enter}`)
    })

    it('Borrar tarea', () => { 
        cy.get('[data-test=new-todo]').type(`Lavar el coche{enter}`)
        cy.contains('Lavar el coche')
            .parent()
            .trigger('mouseover')
        cy.contains('Lavar el coche')
            .parents('li')
            .find('button.destroy.todo-button')
            .click({force: true}) // force:true por si está oculta
    })
    it('Filtrar tarea', () => { 
        cy.get('[data-test=new-todo]').type(`Comprar el pan{enter}`)
        cy.contains('Comprar el pan')
            .parents('li')
            .find('input[type=checkbox]')
            .check()
        cy.contains('Completed').click()//Muestra solo la tarea completada.
        cy.contains('Active').click()//Muestra las tareas activas.
        cy.contains('All').click()//Muestar todas las tareas.

    })

})
