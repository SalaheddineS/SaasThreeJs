"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
class Server {
    constructor() {
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.parserMiddleware();
        this.routeConfig();
    }
    parserMiddleware() {
        this.app.use(express_1.default.json());
    }
    routeConfig() {
        this.app.use('/', (_, res) => { res.send("<h1>Hello World</h1>"); });
    }
    launch(port) {
        this.app.listen(port, () => { console.log(`server is listening on port ${port}`); });
    }
}
exports.default = Server;
