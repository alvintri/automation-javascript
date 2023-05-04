Feature: Customer flow

    Background:
        Given I am on the login page
        


  Scenario: User can't add customer without input customer name
    When i input email as "fares.tris@gmail.com" and password as "tokopedia123"
    And i click on button login
    Then i must navigate to dashboard page
    And i click on pelanggan menu
    And i click on button tambah
    And i input name as "<name>" and phonenumber as "<phonenumber>" and address as "<address>" and note as "<note>"     
    When i click on button simpan
    Then i see displaying a error message '<errorMessageCstmr>'

    Examples:
     | name | phonenumber  | address | note              | errorMessageCstmr                 |
     |      | 082154564214 | bekasi  | tes fail customer | "name" is not allowed to be empty |
  
  Scenario: User can add customer with valid input
    Given i am on the dashboard page
    And i click on pelanggan menu
    And i click on button tambah
    And i input name as "<name>" and phonenumber as "<phonenumber>" and address as "<address>" and note as "<note>"     
    When i click on button simpan
    Then i see a successful message

    Examples:
     | name         | phonenumber  | address    | note           |
     | add customer | 082112725015 | bekasi     | tes customer   | 
