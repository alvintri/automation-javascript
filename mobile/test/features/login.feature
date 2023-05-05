Feature: Login Flow "kasirAja" Mobile

  Background: 
    Given I am on the kasirAja mobile apps login pages

  Scenario: User can login using valid data
    When i input email as "<email>" and password as "<password>"
    And i click on button login

    Examples: 
      | email                | password     | 
      | fares.tris@gmail.com | tokopedia123 |  