-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT,
    "is_Complete" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Todos" ("description", "id", "is_Complete", "tags", "title") SELECT "description", "id", "is_Complete", "tags", "title" FROM "Todos";
DROP TABLE "Todos";
ALTER TABLE "new_Todos" RENAME TO "Todos";
CREATE UNIQUE INDEX "Todos_title_key" ON "Todos"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
