export type CardType = {
	id: string;
	content: string | null;
	isImportant?: boolean;
};

export type BoardType = Array<{
	title: string | null;
	cards: Array<CardType>;
}>;

export type SelectedCardType = {
	id: string;
	cardIndex: number;
	columnIndex: number;
};
