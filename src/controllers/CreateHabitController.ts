import { createHabitsBody } from "../schemas/createHabitBody"
import CreateHabitService from "../services/CreateHabitService"

import { StatusCodes } from 'http-status-codes'
import { FastifyReply, FastifyRequest } from "fastify"

class CreateHabitController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { title, weekDays } = createHabitsBody.parse(req.body)

        const result = await CreateHabitService.execute(title, weekDays)

        return res.code(StatusCodes.OK).send({ message: result })
    }
}

export default new CreateHabitController()