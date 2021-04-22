const express = require('express')

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json({message: "GET"})
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({message: "POST"})
});

app.put("/courses/:id", (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json({message: "PUT"})
});

app.patch("/courses/:id", (request, response) => {
    return response.json({message: "PATCH"})
});

app.delete("/courses/:id", (request, response) => {
    return response.json({message: "DELETE"})
});

app.listen(3333);