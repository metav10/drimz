import styled from 'styled-components';

export const Card = styled.div`
	margin: 12px 0;
	width: 100%;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 1px 2px 1px #0000000f;
	font-size: 16px;
	font-weight: 300;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CardContent = styled.div`
	width: 90%;
	padding: 20px;
	border-radius: 10px;
`;

export const Important = styled.span`
	height: 100%;
	width: 6px;
	position: absolute;
	background: orange;
	inset-inline-start: 0;
	inset-block-start: 0;
	cursor: pointer;
`;
