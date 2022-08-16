import styled from 'styled-components';

export const BoardContent = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow-x: scroll;
	padding: 20px;

	&::-webkit-scrollbar {
		height: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #9bc6ff;
		border-radius: 10px;
	}
`;

const headerHeight = 60;
export const Header = styled.div`
	height: ${headerHeight}px;
	font-size: 20px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background: #deecff;
	border-radius: 10px;
	margin-bottom: 10px;
`;

export const Column = styled.div`
	position: relative;
	margin-inline-end: 20px;
	height: 100%;
	min-width: 340px;
	width: 340px;

	&:last-child {
		margin-inline-end: 0;
	}
`;

export const Cards = styled.div`
	height: calc(100% - ${headerHeight}px);
	overflow-y: scroll;
	/* padding: 0 10px 0 20px; */
	padding: 0 20px;

	&:last-child {
		margin-inline-end: 0;
	}
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #9bc6ff;
		border-radius: 10px;
	}
`;
