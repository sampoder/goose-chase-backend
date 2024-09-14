import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  const { taggerId } = req.body;
  let challenge = await prisma.challenge.update({
    where: {
      id
    },
    data: {
      taggerId: parseInt(taggerId)
    }
  });
  // mass ping everyone: tagged!
  return res.json(challenge);
}
