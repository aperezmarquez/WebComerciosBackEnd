const request = require("supertest")
const app = require("../app")
describe("comercios), () => {
    var token = ""
    var id = ""
    it("should register a commerce", async() => {
        const response = await request(app)
            .post("/api/comercio/")
            .send({"nombre": "Ferrari", "cif": "cifExamp", "direccion": "Italia", "mail": "ferrari@fe.com", "telefono": "123456789", "id": 2})
            .set("Accept", "application/json")
            .expect(200)

        expect(response.body.comercio.mail).toEqual("ferrari@fe.com")
        expect(response.body.comercio.cif).toEqual("cifExamp")
    }
})
