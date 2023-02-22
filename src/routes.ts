import { FastifyInstance } from "fastify"
import CreateHabitController from "./controllers/CreateHabitController"
import GetDayController from "./controllers/GetDayController"
import GetSummaryController from "./controllers/GetSummaryController"
import ToggleHabitController from "./controllers/ToggleHabitController"


export async function appRoutes(app: FastifyInstance) {
    app.post('/habits', CreateHabitController.handle)

    app.get('/day', GetDayController.handle)

    app.patch('/habits/:id/toggle', ToggleHabitController.handle)

    app.get('/summary', GetSummaryController.handle)
}

