import { FastifyRequest, FastifyReply } from "fastify";
import { StatusCodes } from 'http-status-codes'
import { getDayParams } from "../schemas/getDayParams";
import GetDayService from "../services/GetDayService";

class GetDayController {
    async handle(req: FastifyRequest, res: FastifyReply) {

        const { date } = getDayParams.parse(req.query)

        const result = await GetDayService.execute(date)

        return res.code(StatusCodes.OK).send(result)
    }
}

export default new GetDayController()