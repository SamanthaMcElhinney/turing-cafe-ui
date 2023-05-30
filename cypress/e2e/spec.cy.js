describe('Turing Cafe Reservations', () => {
  beforeEach(()=> {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations"), {
      body: [
        {
          id: 18907224, 
          name: 'Christie', 
          date: '8/8', 
          time: '7:00', 
          number: 3
        }
      ]
    }
    cy.visit("http://localhost:3000/");
  })
  it('should display a title on page load', () => {
    cy.get("h1").should('have.text', "Turing Cafe Reservations")
  })
  it('should display a form on page load', () => {
    cy.get('form').should("have.length", 1)
    cy.get('button').should("have.text", "Make Reservations")
  })
  it("should display a list of all the existing reservations on page load", () => {
    cy.get('.resy-container').should('have.length', 1) 
    cy.get('.ind-card').first().contains('Christie')
  })
  it("should be able to create a new reservation and view that reservation on the page", ()=> {
    cy.get('form')
      .get('input[name="name"]')
      .type("Brittney Spears")
      .get('input[name="date"]').type("6/02")
      .get('input[name="time"]').type("11:00")
      .get('input[name="numberGuest"]').type("2")
      .get('button[type="submit"]').click()
    cy.get(".ind-card").last().contains("Brittney Spears")
    cy.get(".ind-card").last().contains("6/02")
    cy.get(".ind-card").last().contains("11:00")
    cy.get(".ind-card").last().contains("2")
  })
})