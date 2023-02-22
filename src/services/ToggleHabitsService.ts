import { DayHabit } from "@prisma/client"
import dayjs from "dayjs"
import { prisma } from "../lib/prisma"

class ToggleHabitService {
    async execute(id: string): Promise<DayHabit> {

        const today = dayjs().startOf('day').toDate()

        let day = await prisma.day.findUnique({
            where: {
                date: today
            }
        })

        if (!day) {
            day = await prisma.day.create({
                data: {
                    date: today
                }
            })
        }

        const dayHabit = await prisma.dayHabit.findUnique({
            where: {
                id_day_id_habit: {
                    id_day: day.id,
                    id_habit: id
                }
            }
        })

        let result: DayHabit

        if (dayHabit) {
            result = await prisma.dayHabit.delete({
                where: {
                    id: dayHabit.id
                }
            })
        } else {
            result = await prisma.dayHabit.create({
                data: {
                    id_day: day.id,
                    id_habit: id
                }
            })
        }

        return result

    }

}

export default new ToggleHabitService()