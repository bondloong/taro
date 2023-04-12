import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getTaro } from '../../firebase/firebase';

const fetchCards: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const taro = await getTaro();
  
  res.status(200).json(taro)
}

export default fetchCards 
