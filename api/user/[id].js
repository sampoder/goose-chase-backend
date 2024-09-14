import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  let user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      taggings: true,
      tags: true
    }
  });
  return res.json(user);
}
