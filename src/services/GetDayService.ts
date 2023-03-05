import dayjs from "dayjs"
import { prisma } from "../lib/prisma"

class GetDayService {
    async execute(date: Date) {
        const parsedDate = dayjs(date).startOf('day')
        const weekDay = parsedDate.get('day')

        const possibleHabits = await prisma.habit.findMany({
            where: {
                created_at: {
                    lte: date
                },
                habitWeekDays: {
                    some: {
                        week_day: weekDay
                    }
                }
            }
        })

        const day = await prisma.day.findUnique({
            where: {
                date: parsedDate.toDate()
            },
            include: {
                dayHabits: true
            }
        })

        const completedHabits = day?.dayHabits.map(dayHabit => {
            return dayHabit.id_habit
        }) ?? []

        return {
            possibleHabits,
            completedHabits
        }
    }
}

export default new GetDayService()