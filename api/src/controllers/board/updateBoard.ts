import { Response, Request } from 'express';
import { ID } from '.';
import { updateBoardData } from './board.utils';

export const updateBoard = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { boardData } = await updateBoardData(ID, req.body);
		res.status(200).json({ boardData });
	} catch (err) {
		throw err;
	}
};
