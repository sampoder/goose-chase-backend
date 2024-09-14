import prisma from "../lib/prisma";

export default async function handler(req, res) {
  let users = await prisma.user.findMany()
  let challenge = await prisma.challenge.create({
    data: {
      taggedId: users[Math.floor(Math.random() * users.length)].id
    }
  })
  // mass ping everyone: new goose chase!
  return res.json(challenge);
}
