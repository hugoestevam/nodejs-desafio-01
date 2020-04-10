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

    it("Should be able to update repository", async () => {
        const repository = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/hugoestevam/OptimusPrime",
                title: "OptimusPrime",
                techs: ["HTML", "CSS", "TypeScript", "C#"]
            });

        const response = await request(app)
            .put(`/repositories/${repository.body.id}`)
            .send({
                url: "https://github.com/hugoestevam/DiarioAcademia",
                title: "DiarioAcademia",
                techs: ["HTML", "CSS", "AngularJS", "C#"]
            });

        expect(isUuid(response.body.id)).toBe(true);

        expect(response.body).toMatchObject({
            url: "https://github.com/hugoestevam/DiarioAcademia",
            title: "DiarioAcademia",
            techs: ["HTML", "CSS", "AngularJS", "C#"]
        });
    });

    it("Should not be able to update a repository that does not exist", async () => {
        await request(app)
            .put(`/repositories/123`)
            .expect(400);
    });

    it("Should not be able to update repository likes manually", async () => {
        const repository = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/hugoestevam/OptimusPrime",
                title: "OptimusPrime",
                techs: ["HTML", "CSS", "TypeScript", "C#"]
            });

        const response = await request(app)
            .put(`/repositories/${repository.body.id}`)
            .send({
                likes: 15
            });

        expect(response.body).toMatchObject({
            likes: 0
        });
    });

    it("should be able to delete the repository", async () => {
        const response = await request(app)
          .post("/repositories")
          .send({
            url: "https://github.com/hugoestevam/OptimusPrime",
            title: "OptimusPrime",
            techs: ["HTML", "CSS", "TypeScript", "C#"]
        });
    
        await request(app)
          .delete(`/repositories/${response.body.id}`)
          .expect(204);
    
        const repositories = await request(app).get("/repositories");
    
        const repository = repositories.body.find(r => r.id === response.body.id);
    
        expect(repository).toBe(undefined);
      });

      it("should not be able to delete a repository that does not exist", async () => {
        await request(app)
          .delete(`/repositories/123`)
          .expect(400);
      });
});