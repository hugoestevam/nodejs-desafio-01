const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
    const { url, title, techs } = request.body;

    const repo = { id: uuid(), url, title, techs, likes: 0 };

    repositories.push(repo);

    return response.json(repo);
});

app.put("/repositories/:id", (request, response) => {
    const { id } = request.params;
    const { url, title, techs, likes } = request.body;
    
    const repoIndex = repositories.findIndex(repo => repo.id === id);

    if( repoIndex < 0 ) {
        return response.status(400).json({ error: "Repository not found." });
    }

    const repoUpdated = {
        id,
        url,
        title,
        techs,
        likes: 0
    }

    repositories[repoIndex] = repoUpdated;

    return response.json(repoUpdated);
});

app.delete("/repositories/:id", (request, response) => {
    const { id } = request.params;

    const repoIndex = repositories.findIndex(repo => repo.id === id);

    if (repoIndex < 0) {
        return response.status(400).json({ error: "Repository not found." });
    }

    repositories.splice(repoIndex, 1);

    return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
    return response.json();
});

module.exports = app;