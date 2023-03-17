// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  src?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = await fetch("https://random.dog/woof.json")
    const data = await response.json()
    res.status(200).json({ src: data.url })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Couldn't find a dog." })
  }
}
