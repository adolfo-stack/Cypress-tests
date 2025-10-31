describe('Mi primera prueba', () => {   

   it('Visita la página principal', () => {     

     cy.visit('/');     

     cy.contains('Bienvenido');   

  });    

   it('Interacción con un elemento', () => {     

     cy.get('#boton-login').click();          

     cy.url().should('include', '/login');   

  }); 

}); 