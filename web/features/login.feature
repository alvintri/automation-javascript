Feature: Login Flow "kasirAja"

  Background: 
    Given I am on the login page

  Scenario: User can't login using empty password
    When i input email as "<email>" and password as "<password>"
    And i click on button login
    Then i must remain on login page displaying a message '<errorMessageLogin>'

    Examples: 
      | email                | password    | errorMessageLogin                  |
      | fares.tris@gmail.com | | "password" is not allowed to be empty |

  Scenario: User can login using valid data
    When i input email as "<email>" and password as "<password>"
    And i click on button login
    Then i must navigate to dashboard page

    Examples: 
      | email                | password     | 
      | fares.tris@gmail.com | tokopedia123 |  