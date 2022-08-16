import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { boardDataStore } from '../../store/BoardStore';
import { CardType } from '../../interfaces/Board';

export const useCard = (card: CardType) => {
	const [boardData, setBoardData] = useRecoilState(boardDataStore);
	const [content, setContent] = useState(card.content);
	const [isImportant, setIsImportant] = useState(card.isImportant);

	const updateCardData = useCallback(() => {
		let tempBoardData = [...boardData];
		let i = 0;
		let currentCardIndex;
		for (const column of tempBoardData) {
			const cardIndex = column.cards.indexOf(card);
			if (cardIndex > -1) {
				currentCardIndex = cardIndex;
				break;
			}
			i++;
		}
		if (currentCardIndex === undefined) return;
		const tempCards = [...tempBoardData[i].cards];
		tempCards[currentCardIndex] = {
			...card,
			content,
			isImportant,
		};

		tempBoardData[i] = { ...tempBoardData[i], cards: tempCards };
		setBoardData(tempBoardData);
	}, [content, isImportant]);

	useEffect(() => {
		updateCardData();
	}, [updateCardData, content, isImportant]);

	return {
		content,
		setContent,
		isImportant,
		setIsImportant,
		updateCardData,
	};
};
