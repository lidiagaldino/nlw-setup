import { FastifyReply, FastifyRequest } from "fastify";
import { toggleHabitParams } from "../schemas/toggleHabitParams";
import ToggleHabitsService from "../services/ToggleHabitsService";

class ToggleHabitController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = toggleHabitParams.parse(req.params)

        const result = await ToggleHabitsService.execute(id)

        return res.code(200).send({ message: result })
    }
}

export default new ToggleHabitController()