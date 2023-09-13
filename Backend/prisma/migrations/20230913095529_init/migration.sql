/*
  Warnings:

  - You are about to drop the column `isComplete` on the `Todos` table. All the data in the column will be lost.
  - Added the required column `is_Complete` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_Complete" BOOLEAN NOT NULL
);
INSERT INTO "new_Todos" ("description", "id", "title") SELECT "description", "id", "title" FROM "Todos";
DROP TABLE "Todos";
ALTER TABLE "new_Todos" RENAME TO "Todos";
CREATE UNIQUE INDEX "Todos_title_key" ON "Todos"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
