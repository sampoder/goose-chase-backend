import prisma from "../lib/prisma";

export default async function handler(req, res) {
  let users = await prisma.user.findMany({
    include: {
      taggings: true,
      tags: true
    }
  })
  return res.json(users);
}
