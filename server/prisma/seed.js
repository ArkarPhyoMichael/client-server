const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../dist/helpers/");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@admin.com",
      password: hashPassword("admin"),
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
