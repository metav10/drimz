import { Response, Request } from 'express';
import { BOARD_DATA } from '../../constant/board';

export const getBoard = async (req: Request, res: Response): Promise<void> => {
	try {
		res.status(200).json({ boardData: BOARD_DATA });
	} catch (err) {
		throw err;
	}
};
