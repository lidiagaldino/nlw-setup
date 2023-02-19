-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_day_habit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_day" TEXT NOT NULL,
    "id_habit" TEXT NOT NULL,
    CONSTRAINT "day_habit_id_day_fkey" FOREIGN KEY ("id_day") REFERENCES "days" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "day_habit_id_habit_fkey" FOREIGN KEY ("id_habit") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_day_habit" ("id", "id_day", "id_habit") SELECT "id", "id_day", "id_habit" FROM "day_habit";
DROP TABLE "day_habit";
ALTER TABLE "new_day_habit" RENAME TO "day_habit";
CREATE UNIQUE INDEX "day_habit_id_day_id_habit_key" ON "day_habit"("id_day", "id_habit");
CREATE TABLE "new_habit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_habit" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "habit_week_days_id_habit_fkey" FOREIGN KEY ("id_habit") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_habit_week_days" ("id", "id_habit", "week_day") SELECT "id", "id_habit", "week_day" FROM "habit_week_days";
DROP TABLE "habit_week_days";
ALTER TABLE "new_habit_week_days" RENAME TO "habit_week_days";
CREATE UNIQUE INDEX "habit_week_days_id_habit_week_day_key" ON "habit_week_days"("id_habit", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
