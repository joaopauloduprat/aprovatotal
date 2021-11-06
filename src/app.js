const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

require("./routes/cursos")(app);
require("./routes/alunos")(app);
require("./routes/matriculas")(app);

app.listen(process.env.PORT || 3000, () => console.log("Server running!"));
