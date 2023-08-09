import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const users = await createUsers();
  const promises = users.map((user) => {
    return createPosts(user);
  });
};

const createUsers = async () => {
  const promises = [...Array(3)].map((_, i) => {
    const userId = i + 1;
    return prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: `email_${userId}@example.com`,
        name: `seed_user_${userId}`,
      },
    });
  });
  return await Promise.all(promises);
};

const createPosts = async (user: User) => {
  const promises = [...Array(3)].map((_, i) => {
    const number = i + 1;
    return prisma.post.create({
      data: {
        title: `${user.name}_post_${number}_title`,
        content: `${user.name}_post_${number}_content`,
        authorId: user.id,
      },
    });
  });
  return await Promise.all(promises);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
