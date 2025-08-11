import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // ✅ Add CORS headers for localhost:3039
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3039');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { name = 'World' } = req.query;

  // Word pools
  const greetings = ['Hello', 'Hi', 'Greetings', 'Hey', 'Salutations', 'Yo', 'Ahoy'];
  const adjectives = ['amazing', 'fantastic', 'brilliant', 'wonderful', 'legendary', 'awesome', 'epic'];
  const activities = [
    'writing great code',
    'building the next big app',
    'debugging like a pro',
    'learning something new',
    'exploring new tech',
    'conquering challenges',
    'changing the world'
  ];
  const endings = [
    'Keep it up!',
    'You rock!',
    'Stay awesome!',
    'Never stop innovating!',
    'Today is your day!',
    'Keep pushing forward!',
    'Great things are coming your way!'
  ];

  // Random picker
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const message = `${pick(greetings)} ${name}, you are ${pick(adjectives)} at ${pick(activities)}. ${pick(endings)}`;

  return res.json({ message });
}
