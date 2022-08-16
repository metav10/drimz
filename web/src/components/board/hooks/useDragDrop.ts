import { useCallback, useState, useEffect, DragEvent } from 'react';
import { BoardType, SelectedCardType } from '../../../interfaces/Board';
import {
	getSelectedCardData,
	cardsWithoutSelectedCard,
} from './useDragDrop.utils';

export const useDragDrop = (
	boradData: BoardType,
	setBoardData: (boradData: BoardType) => void
) => {
	const [selectedCard, setSelectedCard] = useState<SelectedCardType>();
	const [targetColumnIndex, setTargetColumnIndex] = useState<number>();
	const [targetCardIndex, setTargetCardIndex] = useState<number>();

	const onDragStart = (
		id: string,
		cardIndex: number,
		columnIndex: number
	) => {
		setSelectedCard({
			id,
			cardIndex,
			columnIndex,
		});
	};
	const onDragEnd = () => {
		setSelectedCard(undefined);
		setTargetColumnIndex(undefined);
		setTargetCardIndex(undefined);
	};

	const onDragOverColumn = (e: DragEvent<HTMLDivElement>) => {
		if (!e.currentTarget.parentElement) return;

		const targetColumnIndex = Array.from(
			// array related to the path of the board structure
			// Board => Column[Header, Cards] => Cards
			// @ts-ignore
			e.currentTarget.parentElement.parentElement.children
		).indexOf(e.currentTarget.parentElement);

		// checking the relative to column position of cursor and replacing that card
		const cursorPos = e.clientY - e.currentTarget.offsetTop;
		const { childNodes } = e.currentTarget;
		let cursorPosChildIndex = -1;
		let childIndex = 0;
		let lastChildEndArea = 0;
		for (const child of Array.from(childNodes)) {
			// @ts-ignore
			let { offsetTop, clientHeight } = child;
			offsetTop -= e.currentTarget.offsetTop;
			const childEndArea = offsetTop + clientHeight;
			lastChildEndArea = childEndArea;
			if (cursorPos > offsetTop && cursorPos < childEndArea) {
				cursorPosChildIndex = childIndex;
				break;
			}
			childIndex++;
		}

		// in case exeeding the column size
		if (cursorPosChildIndex === -1) {
			if (lastChildEndArea > cursorPos) {
				cursorPosChildIndex = 0;
			} else {
				cursorPosChildIndex = childNodes.length - 1;
			}
		}

		if (
			cursorPosChildIndex === selectedCard?.cardIndex &&
			targetColumnIndex === selectedCard.columnIndex
		)
			return;
		if (targetColumnIndex === -1) return;
		setTargetColumnIndex(targetColumnIndex);
		// if (cursorPosChildIndex === -1) return;
		setTargetCardIndex(cursorPosChildIndex);
	};

	const moveCard = useCallback(() => {
		if (!selectedCard) return;
		if (targetColumnIndex === undefined) return;
		if (targetCardIndex === undefined) return;

		const {
			id,
			columnIndex: originColumnIndex,
			cardIndex: originCardIndex,
		} = selectedCard;
		const tempBoard: BoardType = [...boradData];
		let originCards = [...tempBoard[originColumnIndex].cards];
		let targetCards = [...tempBoard[targetColumnIndex].cards];

		// check if same card
		if (
			originColumnIndex === targetColumnIndex &&
			targetCardIndex === originCardIndex
		)
			return;

		const cardData = getSelectedCardData(originCards, id);
		if (!cardData) return;

		// remove from origin
		originCards = cardsWithoutSelectedCard(originCards, id);
		if (originColumnIndex === targetColumnIndex) {
			targetCards = originCards;
		}

		// add to target on pos
		targetCards.splice(targetCardIndex, 0, cardData);

		// save data
		tempBoard[originColumnIndex] = {
			...tempBoard[originColumnIndex],
			cards: originCards,
		};
		tempBoard[targetColumnIndex] = {
			...tempBoard[targetColumnIndex],
			cards: targetCards,
		};

		setSelectedCard({
			...selectedCard,
			columnIndex: targetColumnIndex,
			cardIndex: targetCardIndex,
		});
		setBoardData(tempBoard);
	}, [targetCardIndex, targetColumnIndex]);

	useEffect(() => {
		if (targetCardIndex === undefined || targetColumnIndex === undefined)
			return;
		moveCard();
	}, [targetCardIndex, targetColumnIndex]);

	return {
		data: boradData,
		onDragStart,
		onDragEnd,
		onDragOverColumn,
	};
};
