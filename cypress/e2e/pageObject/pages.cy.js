class CreateAPoll {
    
    navigate() {
        cy.clearCookies();
        cy.visit('https://doodle.com/en/');
    }

    closeCookies(){
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(3000);
        cy.get('.module__StyledHeading1-sc-8k4x5k-21 ').contains('Professional scheduling made easy');
        cy.get('#onetrust-accept-btn-handler').should('not.be.visible');
        return this
    }

    newPoll(){
        cy.get(".module__StyledCreateMenu-sc-8k4x5k-105").click()
        cy.get('.OrganizationForm__section-heading').contains('Create group poll');
        return this 
    }

    typeName(){
        cy.get('input[name="organizerName"]').type("Your Name");
    }

    typeDesc(){
        cy.get('.MeetingMetadata__description__textarea').type("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
    }

    typeTitle(){    
        cy.get('input[placeholder="What\'s the occasion?"]').type("Title Test");
    }

    location(){    
        cy.get('input[placeholder="Where will this happen?"]').type("Kosovo");
    }

    selectCountry(){
        cy.get('#text').click();
    }

    typeEmail(){
        let min = 100;
        let max = 20000;
        let num;
        function randomEmail() {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        randomEmail();
        let email = `test${num}@gmail.com` 
        
        cy.get('input[name="organizerEmail"]').type(email);
    }

    dateButton(){
        cy.get('.calendar').click();
    }

    submitButton(){
        cy.get('.ActionBar__submit-button').click()
    }

    chooseSectionDate(){
        cy.get('.rbc-day-slot:nth-child(8) > .rbc-timeslot-group').click({multiple: true, force: true});
    }
}

export default CreateAPoll
