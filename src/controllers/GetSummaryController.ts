import { FastifyReply, FastifyRequest } from "fastify";
import GetSummaryService from "../services/GetSummaryService";

class GetSummaryController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const result = await GetSummaryService.execute()

        return res.code(200).send({ message: result })
    }
}

export default new GetSummaryController()