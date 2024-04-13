"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./api/routes/router"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const PORT = process.env.PORT ? process.env.PORT : 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.default);
exports.default = app.listen(PORT, () => console.log("Server running at port :", PORT)).on("error", (e) => { throw new Error(e.message); });
