import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { boardDataStore } from '../../store/BoardStore';

export const useColumnTitle = (title: string | null, index: number) => {
	const [boardData, setBoardData] = useRecoilState(boardDataStore);
	const [content, setContent] = useState(title);

	const updateTitleData = useCallback(() => {
		let tempBoardData = [...boardData];
		tempBoardData[index] = { ...tempBoardData[index], title: content };

		setBoardData(tempBoardData);
	}, [content]);

	useEffect(() => {
		updateTitleData();
	}, [updateTitleData, content]);

	return {
		content,
		setContent,
	};
};
