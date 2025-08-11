import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query

  // Some word pools to build sentences
  const greetings = ['Hello', 'Hi', 'Greetings', 'Hey', 'Salutations', 'Yo', 'Ahoy']
  const adjectives = ['amazing', 'fantastic', 'brilliant', 'wonderful', 'legendary', 'awesome', 'epic']
  const activities = [
    'writing great code',
    'building the next big app',
    'debugging like a pro',
    'learning something new',
    'exploring new tech',
    'conquering challenges',
    'changing the world'
  ]
  const endings = [
    'Keep it up!',
    'You rock!',
    'Stay awesome!',
    'Never stop innovating!',
    'Today is your day!',
    'Keep pushing forward!',
    'Great things are coming your way!'
  ]

  // Pick a random item from any array
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

  const message = `${pick(greetings)} ${name}, you are ${pick(adjectives)} at ${pick(activities)}. ${pick(endings)}`

  return res.json({ message })
}

