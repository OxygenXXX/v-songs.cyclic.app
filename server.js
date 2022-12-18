const express = require("express");

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

const server_port = process.env.PORT || 3030;

const server = application.listen(server_port, () =>
{
    console.log(`Server port: ${server.address().port}`);
});