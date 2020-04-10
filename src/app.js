const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json();
});

app.post("/repositories", (request, response) => {
    const { url, title, techs } = request.body;

    const repo = { id: uuid(), url, title, techs, likes: 0 };

    repositories.push(repo);

    return response.json(repo);
});

app.put("/repositories/:id", (request, response) => {
  return response.json();
});

app.delete("/repositories/:id", (request, response) => {
    return response.json();
});

app.post("/repositories/:id/like", (request, response) => {
    return response.json();
});

module.exports = app;