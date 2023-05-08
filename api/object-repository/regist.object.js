const request = require('supertest')

const endpoint = {
    authentications : "/authentications",
    user : "/users"
}

class registerApiObject extends baseUrl {
    getLogin(url,endpoint,auth,payload) {
        const response = request(baseUrl)
            .post(endpoint.authentications)
            .send(auth);
        return response
    }

    createUser(url,endpoint,token,payload){
        const response = request(url)
        .post(endpoint.user)
        .send(payload)
        .set("Authorization", `Bearer ${token}`);
    }
}

module.exports = new registerApiObject();