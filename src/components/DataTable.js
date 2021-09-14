import React from 'react';
import styled from 'styled-components';

import { Data } from 'components/Data';

const dataArray = Data;

const getBgColor = (value) => {
	let color = '#cccccc';
	if (value > 8) {
		color = '#97E126';
	} else if (value > 6) {
		color = '#C9E223';
	} else if (value > 4) {
		color = '#F6D827';
	} else if (value > 2) {
		color = '#FC9526';
	} else if (value <= 2) {
		color = '#FF1F40';
	} else {
		color = '#cccccc';
	}
	return color;
};

export const DataTable = () => {
	return dataArray.map((data) => {
		return (
			<Main key={data.name}>
				<DataText style={{ background: getBgColor(data.total) }}>
					{!data.total ? '?' : data.total}
				</DataText>

				<DataText style={{ background: getBgColor(data.eNPS) }}>
					{!data.eNPS ? '?' : data.eNPS}
				</DataText>

				<DataText style={{ background: getBgColor(data.leadership) }}>
					{!data.leadership ? '?' : data.leadership}
				</DataText>

				<DataText style={{ background: getBgColor(data.jobSatisfaction) }}>
					{!data.jobSatisfaction ? '?' : data.jobSatisfaction}
				</DataText>

				<DataText style={{ background: getBgColor(data.meaningfullness) }}>
					{!data.meaningfullness ? '?' : data.meaningfullness}
				</DataText>
			</Main>
		);
	});
};

const DataText = styled.p`
	font-family: Poppins, sans-serif;
	font-weight: 600;
	color: #fff;
	height: 50px;
	width: 20%;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Main = styled.div`
	display: flex;
	width: 100%;
`;
