const request = require("supertest");
const app = require("../app");
const { isUuid } = require("uuidv4");

describe("Repositories", () => {
    it("Should be able to create a new repository", async () => {
      const response = await request(app)
        .post("/repositories")
        .send({
          url: "https://github.com/hugoestevam/OptimusPrime",
          title: "OptimusPrime",
          techs: ["HTML", "CSS", "TypeScript", "C#"]
        });
  
      expect(isUuid(response.body.id)).toBe(true);
  
      expect(response.body).toMatchObject({
        url: "https://github.com/hugoestevam/OptimusPrime",
        title: "OptimusPrime",
        techs: ["HTML", "CSS", "TypeScript", "C#"],
        likes: 0
      });
    });

    it("Should be able to list the repositories", async () => {
        const repository = await request(app)
        .post("/repositories")
        .send({
            url: "https://github.com/hugoestevam/OptimusPrime",
            title: "OptimusPrime",
            techs: ["HTML", "CSS", "TypeScript", "C#"]
        });
    
        const response = await request(app).get("/repositories");
    
        expect(response.body).toEqual(
          expect.arrayContaining([
            {
                id: repository.body.id,
                url: "https://github.com/hugoestevam/OptimusPrime",
                title: "OptimusPrime",
                techs: ["HTML", "CSS", "TypeScript", "C#"],
                likes: 0
            }
          ])
        );
      });

});