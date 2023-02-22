import { Habit } from "@prisma/client"
import dayjs from "dayjs"
import { prisma } from "../lib/prisma"

class CreateHabitService {
    async execute(title: string, weekDays: number[]): Promise<Habit> {
        const today = dayjs().startOf('day').toDate()

        const result = await prisma.habit.create({
            data: {
                title,
                created_at: today,
                habitWeekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay
                        }
                    })
                }
            }
        })

        return result
    }
}

export default new CreateHabitService()