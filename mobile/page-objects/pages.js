'http://127.0.0.1'

module.exports = class Page {
    open (path) {
        browser.url(path);
    }
}