import prisma from "../lib/prisma";

export default async function handler(req, res) {
  const { username, phone } = req.body;
  let user = await prisma.user.upsert({
    where: {
      username,
    },
    update: {
      phone
    },
    create: {
      username,
      phone: phone || null,
    },
    include: {
      taggings: true,
      tags: true
    },
  });
  // send a confirmation!
  return res.json(user);
}
