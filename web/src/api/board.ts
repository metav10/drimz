import { API_URLS } from '../constant/api';
import { BoardType } from '../interfaces/Board';
import { getRequest, putRequest } from './api';

export const fetchBoard = () => getRequest<BoardType>(API_URLS.getBoard);

export const updateBoard = (data: BoardType) =>
	putRequest(API_URLS.updateBoard, data);
