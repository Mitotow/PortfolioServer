import { Router } from "express";

const router = Router();

router
    .get('/', (_, res) => { res.send({ message: 'Server is running' }) });

export default router;