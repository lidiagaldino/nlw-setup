import Fastify, { FastifyInstance } from "fastify";
import { appRoutes } from "./routes";

class App {
    declare fastify: FastifyInstance

    constructor() {
        this.fastify = Fastify({
            logger: true
        })

        this.routes()
    }

    private routes() {
        this.fastify.register(appRoutes)
    }
}

export default new App().fastify