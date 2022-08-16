import { CardType } from '../../../interfaces/Board';

export const cardsWithoutSelectedCard = (cards: Array<CardType>, id: string) =>
	cards.filter((card) => card.id !== id);

export const getSelectedCardData = (cards: Array<CardType>, id: string) =>
	cards.find((card) => card.id === id);
