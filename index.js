import express from "express"
import cors from "cors";
import { pool } from './backend/db/db.js';
import indexRoutes from "./backend/routes/index.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"))

const port = 4000;

app.use(indexRoutes);

app.listen(port, console.log("http://localhost:" + port));