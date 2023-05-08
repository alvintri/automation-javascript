

class register_api_spec extends baseUrl {
    async getLogin(response) {
        
        const response = request("https://kasir-api.belajarqa.com")
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