const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./controllers/alunoController")(app);
require("./controllers/cursoController")(app);
require("./controllers/matriculaController")(app);

app.listen(3000, () => console.log("Server running on port 3000"));
