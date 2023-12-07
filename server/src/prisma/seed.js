import prisma from "./prisma.js";

const main = async () => {
  console.log("Seeding Hobbies");
  await prisma.hobby.createMany({
    data: [
      {
        name: "Cross Stitching",
        description:
          "Making tons of little x's with a needle and thread to make beautiful (or snarky) patterns",
      },
      { name: "Running" },
      { name: "A Cappella" },
      { name: "Finding dope plants in a nature hike" },
    ],
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
