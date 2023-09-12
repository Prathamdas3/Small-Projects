/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Todo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Todos_title_key" ON "Todos"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Notes_title_key" ON "Notes"("title");
