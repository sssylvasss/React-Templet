import React from 'react';
import styled from 'styled-components';

import { Data } from 'components/Data';

const dataArray = Data;

const getBgColor = (value) => {
	let color = '#cccccc';
	switch (true) {
		case value < 2:
			color = '#FF1F40';
			break;
		case value < 4:
			color = '#FC9526';
			break;
		case value < 6:
			color = '#F6D827';
			break;
		case value < 8:
			color = '#C9E223';
			break;
		case value >= 8:
			color = '#97E126';
			break;
		default:
			color = '#cccccc';
	}
	return color;
};

export const DataTable = () => {
	return dataArray.map((data) => {
		return (
			<Main key={data.id}>
				<DataText color={getBgColor(data.total)}>
					{data.total || data.total === 0 ? data.total : '?'}
				</DataText>

				<DataText color={getBgColor(data.eNPS)}>
					{data.eNPS || data.eNPS === 0 ? data.eNPS : '?'}
				</DataText>

				<DataText color={getBgColor(data.leadership)}>
					{data.leadership || data.leadership === 0 ? data.leadership : '?'}
				</DataText>

				<DataText color={getBgColor(data.jobSatisfaction)}>
					{data.jobSatisfaction || data.jobSatisfaction === 0
						? data.jobSatisfaction
						: '?'}
				</DataText>

				<DataText color={getBgColor(data.meaningfullness)}>
					{data.meaningfullness || data.meaningfullness === 0
						? data.meaningfullness
						: '?'}
				</DataText>
			</Main>
		);
	});
};

const DataText = styled.p`
	font-family: sans-serif;
	font-weight: 700;
	color: #fff;
	height: 50px;
	width: 20%;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.color};
	@media (max-width: 550px) {
		width: 100%;
	}
`;

const Main = styled.div`
	display: flex;
	width: 100%;
	@media (max-width: 550px) {
		flex-direction: column;
		width: 75%;
	}
`;
