import styled from 'styled-components';

const BasicButton = styled.button`
	border: none;
	padding: 5px 10px;
	cursor: pointer;
	font-size: 16px;
	border-radius: 4px;
	background-color: #9bc6ff;
	color: #5294ed;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Add = styled(BasicButton)`
	border-radius: 50%;
	width: 30px;
	height: 30px;
    padding-block-end: 6px;
`;

export const Remove = styled(BasicButton)`
	border-radius: 50%;
	width: 20px;
	height: 20px;
    padding-block-end: 6px;
    margin-inline-end: 10px;
    background-color: #eff6ff;
`;

export const Classic = styled(BasicButton)``;
