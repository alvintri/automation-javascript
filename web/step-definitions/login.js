const { Given, When, Then } = require('@cucumber/cucumber');

const LoginsPage = require('../page-objects/login.page.js');
const DashboardPage = require('../page-objects/dashboard.page.js');

//LOGIN
Given('I am on the login page', async () => {
    await LoginsPage.open();
    await expect(browser).toHaveTitle('kasirAja');

});

When('i input email as {string} and password as {string}', async function (email, password) {
    await LoginsPage.emailTextBox.setValue(email);
    await LoginsPage.passwordTextBox.setValue(password);
});

When('i click on button login', async () => {
    await LoginsPage.loginButton.click();
});

Then('i must navigate to dashboard page', async () => {
    await expect(DashboardPage.dashboardPageElement).toExist();
});

Then('i must remain on login page displaying a message {string}', async function (errorMessageLogin) {
    await expect(LoginsPage.messageElement).toExist();
    await expect(LoginsPage.messageElement).toHaveTextContaining(errorMessageLogin);
});

//Pelanggan
Given('i am on the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When('i click on pelanggan menu', async () => {
    await DashboardPage.pelangganMenuElement.click();
});

When('i click on button tambah', async () => {
    await DashboardPage.btnTambahPelanggan.click();
});

When('i input name as {string} and phonenumber as {string} and address as {string} and note as {string}', async function (name, phonenumber, address, note) {
    await DashboardPage.inputName.setValue(name);
    await DashboardPage.inputPhoneNumber.setValue(phonenumber);
    await DashboardPage.inputAddress.setValue(address);
    await DashboardPage.inputNote.setValue(note);
});

When('i click on button simpan', async () => {
    await DashboardPage.btnSimpanPelanggan.click();
});

Then('i see a successful message', async () => {
    await expect(DashboardPage.messageElement).toExist();
});

Then('i see displaying a error message {string}', async function (errorMessageCstmr) {
    await expect(DashboardPage.errorMessagePelanggan).toExist();
    await expect(DashboardPage.errorMessagePelanggan).toHaveTextContaining(errorMessageCstmr);
});