import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getTale } from '../../firebase/firebase';

const fetchCards: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const taro = await getTale(req.headers.referer, req.query.id);

    res.status(200).json(taro)
}

export default fetchCards 