const { ADMIN_EMAIL } = require("../src/config");
// const prisma = require("../src/lib/prisma");
// const { hashedPassword } = require("../dist/helpers");

const { PrismaClient } = require("@prisma/client");
const { hashedPassword } = require("../dist/helpers/");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: ADMIN_EMAIL,
      password: hashedPassword("admin"),
      isAdmin: true,
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
