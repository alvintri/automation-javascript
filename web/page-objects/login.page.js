const Page = require('./page.js')

class LoginsPage extends Page {
    get emailTextBox () {
        return $('#email')
    }
    
    get passwordTextBox () {
        return $('#password')
    }
    
    get loginButton () {
        return $('button[type="submit"]')
    }
    
    get messageElement () {
        return $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3')
    }

    open() {
        super.open('https://kasirdemo.belajarqa.com')
    }
}

module.exports = new LoginsPage();