const { Given, When, Then } = require('@cucumber/cucumber');

const LoginsPage = require('../../page-objects/login.page.js');

//LOGIN
Given('I am on the kasirAja mobile apps login pages', async () => {
});

When('i input email as {string} and password as {string}', async function (email, password) {
    await LoginsPage.emailTextBox.setValue(email);
    await LoginsPage.passwordTextBox.setValue(password);
});

When('i click on button login', async () => {
    await LoginsPage.loginButton.click();
});

Then('i must remain on login page displaying a message {string}', async function (errorMessageLogin) {
    await expect(LoginsPage.messageElement).toExist();
    await expect(LoginsPage.messageElement).toHaveTextContaining(errorMessageLogin);
});

