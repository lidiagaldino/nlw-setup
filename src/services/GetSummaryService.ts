import { prisma } from "../lib/prisma"

class GetSummaryService {
    async execute() {
        const summary = await prisma.$queryRaw`
            SELECT 
                D.id,
                D.date,
                (
                    SELECT
                        cast(count(*) as float)
                    FROM day_habit DH
                    WHERE DH.id_day =  D.id
                ) as completed,
                (
                    SELECT
                        cast(count(*) as float)
                    FROM habit_week_days HWD
                    JOIN  habits H 
                        ON H.id= HWD.id_habit
                    WHERE HWD.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
                    AND H.created_at <= D.date
                ) as ammount
            FROM days D
        `

        return summary
    }
}

export default new GetSummaryService()