import React from 'react';
import styled from 'styled-components';

import { DataTable } from 'components/DataTable';
import { TitleContainer } from 'components/TitleContainer';
import { GroupsTitles } from 'components/GroupsTitles';

export const Table = () => {
	return (
		<>
			<Header>
				<TitleText>Analysis</TitleText>
			</Header>
			<TableContainer>
				<GroupsTitles />
				<DataSection>
					<TitleContainer />
					<DataTable />
				</DataSection>
			</TableContainer>
		</>
	);
};

const Header = styled.div`
	display: flex;
	align-text: center;
	padding: 15px 15px 0 15px;
	margin: 0;
	width: 90%;
	height: 70px;
	background: #fff;
	border-bottom: 1px solid #ebebeb;
	@media (max-width: 550px) {
		width: 100%;
	}
`;

const TitleText = styled.h1`
	font-family: sans-serif;
	font-size: 24px;
	color: #674343;
`;

const TableContainer = styled.div`
	display: flex;
	height: 210px;
	width: 90%;
	background: #fff;
	@media (max-width: 550px) {
		width: 100%;
		height: 100%;
		flex-direction: column;
	}
`;

const DataSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media (max-width: 550px) {
		flex-direction: row;
		align-items: left;
	}
`;
