import express from "express";
import { config } from "dotenv";
const app = express();

//middlewares
app.use(express.json());

app.get("/", (req, res, next) => {
    return res.send("Hello");
});

app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map