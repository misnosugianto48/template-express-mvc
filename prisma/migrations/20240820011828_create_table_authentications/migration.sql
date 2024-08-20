-- CreateTable
CREATE TABLE "authentications" (
    "token" TEXT NOT NULL,

    CONSTRAINT "authentications_pkey" PRIMARY KEY ("token")
);

-- CreateIndex
CREATE UNIQUE INDEX "authentications_token_key" ON "authentications"("token");
