import { Response, Request } from 'express';
import { ID } from '.';
import { fetchBoardData } from './board.utils';

export const getBoard = async (req: Request, res: Response): Promise<void> => {
	try {
		const { boardData } = await fetchBoardData(ID);
		res.status(200).json({ boardData });
	} catch (err) {
		throw err;
	}
};
