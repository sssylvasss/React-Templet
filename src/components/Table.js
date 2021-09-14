import React from 'react';
import styled from 'styled-components';

import { DataTable } from 'components/DataTable';
import { TitleContainer } from 'components/TitleContainer';

export const Table = () => {
	return (
		<Main>
			<TableHead>
				<TitleText>Analysis</TitleText>
			</TableHead>
			<TableContainer>
				<LeftSection>
					<TopLeftSection></TopLeftSection>
					<Wrapper>
						<GroupNr>Group 1</GroupNr>
					</Wrapper>
					<Wrapper>
						<GroupNr>Group 2</GroupNr>
					</Wrapper>
					<GroupNr>Group 3</GroupNr>
				</LeftSection>
				<RightSection>
					<TitleContainer />
					<DataTable />
				</RightSection>
			</TableContainer>
		</Main>
	);
};

const Main = styled.div`
	padding: 25px;
	background: #ebebeb;
	max-width: 2000px;
	@media (max-width: 375px) {
		padding: 15px 0 15px 0;
	}
`;

const TableContainer = styled.div`
	display: flex;
	height: 210px;
	width: 90%;
	background: #fff;
	@media (max-width: 375px) {
		width: 100%;
	}
`;

const TableHead = styled.div`
	display: flex;
	align-items: center;
	width: 90%;
	height: 70px;
	background: #fff;
	border-bottom: 1px solid #ebebeb;
	@media (max-width: 375px) {
		width: 100%;
	}
`;

const TitleText = styled.h1`
	font-family: Poppins, sans-serif;
	padding-left: 15px;
	font-size: 24px;
	color: #674343;
`;

const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	background: #fff;
	@media (max-width: 550px) {
		width: 15%;
	}
`;
const Wrapper = styled.div`
	border-bottom: 1px solid #ebebeb;
`;

const TopLeftSection = styled.div`
	height: 60px;
	border-bottom: 1px solid #ebebeb;
`;

const GroupNr = styled.p`
	font-family: Poppins, sans-serif;
	font-weight: 600;
	padding-left: 15px;
	color: #674343;
	height: 16px;
	@media (max-width: 550px) {
		padding-left: 3px;
		font-weight: 400;
		font-size: 12px;
	}
`;

const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
