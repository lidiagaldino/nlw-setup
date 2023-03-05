import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

class App {
    declare fastify: FastifyInstance

    constructor() {
        this.fastify = Fastify()

        this.middleware()
        this.routes()
    }

    private middleware() {
        this.fastify.register(cors)
    }

    private routes() {
        this.fastify.register(appRoutes)
    }
}

export default new App().fastify