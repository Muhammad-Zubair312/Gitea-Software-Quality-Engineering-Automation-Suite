describe('Gitea UI Automated Functional Test', () => {
  const baseUrl = 'http://host.docker.internal:3000';

  it('Successfully logs in and navigates to the New Repository page', () => {
    // 1. Visit the login page
    cy.visit(`${baseUrl}/user/login`);

    // 2. Enter Credentials
    cy.get('#user_name').type('admin'); 
    cy.get('#password').type('HkVN667a5CmFP5L'); 
    
    // 3. Click the Blue "Sign In" Button
    cy.get('button.primary').contains('Sign In').click();

    // 4. Verification: Confirm login by checking the top right menu
    // Your dashboard shows the '+' icon and user avatar, proving success
    cy.get('.ui.dropdown.jump.item').should('be.visible');

    // 5. ACTION: Click the '+' icon (dropdown)
    cy.get('.ui.dropdown.jump.item').first().click();

    // 6. Click 'New Repository' from the dropdown
    cy.get('a[href="/repo/create"]').first().click({force: true});

    // 7. FINAL ASSERTION: Look for the specific header seen in Gitea 1.25.3
    // We check for the text "New Repository" and the input box for the name
    cy.contains('h3', 'New Repository').should('be.visible');
    cy.get('#repo_name').should('be.visible');
    
    // 8. Final Screenshot for documentation
    cy.screenshot('Role2_Final_E2E_Success');
  });
});