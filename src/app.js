const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./routes/cursos")(app);
require("./routes/alunos")(app);
require("./routes/matriculas")(app);

app.listen(process.env.PORT || 3000, () => console.log("Server running!"));
