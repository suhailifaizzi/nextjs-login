-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "securephrase" TEXT,
    "password" TEXT,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);
