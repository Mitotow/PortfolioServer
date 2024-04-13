import express from 'express';
import dotenv from 'dotenv';
import router from './api/routes/router';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export default app.listen(PORT, () => console.log("Server running at port :", PORT)).on("error", (e) => { throw new Error(e.message); });
